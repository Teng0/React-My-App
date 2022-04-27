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


// const tasks = [
// {id:1,text:"Task Text 1",completed:true},
// {id:2,text:"Task Text 2",completed:true},
// {id:3,text:"Task Text 3",completed:true},
// ];


const tasks =[];



function App() {
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response)=>{

              setTasks(response.data);
            })
            .catch((e)=>{
            });
    },[]);

    console.log(tasks[0]);

    return (
        <ThemeProvider.Provider value='light'>
            <div className="App">
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
