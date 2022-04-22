 export  default function Tasks(props) {
console.log(props.onDelete);
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
        </div>
    )

}