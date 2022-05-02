import React, {useEffect} from "react";
import axios from "axios";
export default function Blog() {

    useEffect(()=>{
        const data = axios.get("https://jsonplaceholder.typicode.com/todos" )
            .then((resp)=>{
            })
            .catch(()=>{
            });
    },[])

    return (
        <main style={{ padding: "1rem 0" }}>

        </main>
    );
}