import {useState} from "react";
import taskcss from './tasks.module.css';



export  default function Counter()
{
    let [curValue , setCurValue] = useState(0);
    let [title, setTitle] = useState('');
    function increace(){
        curValue++;
        setCurValue(curValue);
    }
    function updateTitles(){
        title = setTitle('Number is '+curValue);
    }
    return(
        <div>
            <h2>{title}</h2>
            <p>{curValue}</p>
            <button className={taskcss.buttons} onClick={increace}>+</button>
            <button  onClick={updateTitles}>Show Num</button>
        </div>
    )
}