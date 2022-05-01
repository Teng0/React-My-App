import React  from "react";
import {useParams} from "react-router-dom";
export default function User() {
    const  params = useParams();
    console.log(params);
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>User Page</h2>
        </main>
    );
}