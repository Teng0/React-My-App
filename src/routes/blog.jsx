import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "./header";
export default function Blog() {

const [data,setData]=useState([]);
const  params = useParams();
const  page = params.page || 1 ;

    useEffect(()=>{
        const data = axios.get("https://jsonplaceholder.typicode.com/todos",{
            params:{
                page:page
            }
            })
            .then((resp)=>{
            setData(resp.data);
            })
            .catch(()=>{
            });
    },[])


    return (
        <main style={{padding: "1rem 0"}}>
            {
                data.map((item,index) => (
                    <h3 key={index}>{item.id} {item.title}</h3>
                ))
            }
        </main>
    );
}