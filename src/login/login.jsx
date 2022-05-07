import React, {useState} from "react";
import "./Login.css";

import {useNavigate} from 'react-router-dom';
// import {Axios as axios} from "axios";
//
// axios.get('Some.url', {
//     headers: {authorization:`Bearer asdasdsa`}
// });


export default function Login() {

    const  [email,setEmail]=useState("");
    const  [password,setPassword]=useState("");
    const navigate = useNavigate();

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }


    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        sessionStorage.setItem("tocken", "TokenVeryLongDataHere");
        navigate('/blog');
    }


    return (
        <>

            <form className="modal-content animate" action="" onSubmit={onSubmit} method="post">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" required onChange={handleEmailChange}/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onChange={handlePasswordChange} required/>
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/>
                    </label>
                </div>
            </form>

        </>
    );
};