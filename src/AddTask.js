import {useState} from "react";

export default function AddTask()
{
   const [value,setValue] =useState('');

function onChange(e)
{
    setValue(e.target.value);
}
function submite(e)
{
    e.preventDefault();
    console.log(value);
}
    return(
        <form action="" onSubmit={submite}>
            <input type="text" onChange={onChange} value={value}/>
            <button>Add Task</button>
        </form>
    )
}