import {useState} from "react";

export default function AddTask() {
    const [value, setValue] = useState('');
    const [select, setSelect] = useState('');

    function onChange(e) {
        setValue(e.target.value);
    }

    function submite(e) {
        e.preventDefault();
        console.log(value);
    }

    function selected(e) {
        setSelect(e.target.value);
    }
    return (
        <form action="" onSubmit={submite}>
            <input type="text" onChange={onChange} value={value}/>
            <p>
                <select value={select} onChange={selected}>
                    <option value="test">Test</option>
                    <option value="test2">Test2</option>
                    <option value="test2">Test2</option>
                </select>
            </p>

            <button>Add Task</button>
        </form>
    )
};
