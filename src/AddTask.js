import React ,{useState,useRef,useEffect} from "react";

export default function AddTask() {
    const [value, setValue] = useState('');
    const [select, setSelect] = useState('');

    const ref = useRef();

    function onChange(e) {
        setValue(e.target.value);
    }

    function submite(e) {
        e.preventDefault();

    }

    function selected(e) {
        setSelect(e.target.value);
    }
     useEffect(()=>{ref.current.focus()},[]);
    return (
        <form action="" onSubmit={submite}>
            <input type="text" onChange={onChange} value={value} ref={ref}/>
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
