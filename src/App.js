import logo from './logo.svg';
import './App.css';
import Tasks from "./Tasks";
import onDelete ,{onClick2} from "./Functions";
import Counter from "./Counter";
import AddTask from "./AddTask";
import * as react from "react";
import * as React from "react";
import ThemeProvider from "./ThemeProvider";
import Border from "./Border";
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import './i18n';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";
import {useReducer} from "react";


// const tasks = [
// {id:1,text:"Task Text 1",completed:true},
// {id:2,text:"Task Text 2",completed:true},
// {id:3,text:"Task Text 3",completed:true},
// ];


const tasks =[];
const initialState =[];
function reduce(state,action) {
    if (action.type == 'add_task'){
        return [...state,action.value];
    }
}


function App() {
    const [tasks,setTasks] = useState([]);
    const { t, i18n } = useTranslation();
    const [btText,setBtText]=useState('ენის შეცვლა');
    const [state,dispach]=useReducer(reduce,initialState);

    dispach({type:"add_task",value:{text:"Lorem ipsum"}});
    dispach({type:"delete_task",value:{id:9}});
    dispach({type:"complete_task",value:{id:9}});
    dispach({type:"unCheck_task",value:{id:9}});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response)=>{

              setTasks(response.data);
            })
            .catch((e)=>{
            });
    },[]);

function changeLanguage(e) {

       let lang = e.target.value;
       if (lang==='en'){
        lang ='ka';
        e.target.value = 'ka';
       setBtText('Login')
    }else {
        lang = 'ka';
        e.target.value = 'en';
           setBtText('ენის შეცვლა')
    }

        i18n.changeLanguage(lang);
}

    return (
        <ThemeProvider.Provider value='light'>
            <div className="App">

                <h1>{t('login')}</h1>
                <button onClick={changeLanguage} value="en">{btText}</button>
                <header className="App-header">
                    {/*<Counter></Counter>*/}


                    {<Border hedaer={()=><div>Test</div>}>
                        <AddTask></AddTask>
                    </Border>}
                    {
                        tasks.map(task => <Tasks
                                key={task.id}
                                text={task.title}
                                id={task.id}
                                checked={task.completed}
                                onDelete={onDelete}
                            />
                        )}

                </header>
            </div>
        </ThemeProvider.Provider>
    );

}

export default App;
