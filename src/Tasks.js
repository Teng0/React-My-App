import Button from "./Button";
export  default function Tasks(props) {
    return (
        <div>
            <input type="checkbox"/>
            <span>{props.text}</span>
            <button  onClick={
                ()=>{props.onDelete(props.id)}
                }
            >
                Delete
            </button>
            <Button />
        </div>
    )

}