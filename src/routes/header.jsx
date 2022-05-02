
import React  from "react";
import {Link, Route, Routes} from "react-router-dom";
import Expenses from "./expenses";
import Invoices from "./invoices";
import App from "../App";
import Users from "./users";
import User from "./single_user";
import Blog from "./blog";




export default function Header(){
    return (<>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/users">Users</Link> |{" "}
                <Link to="/user">User</Link> |{" "}
                <Link to="/blog">Blog</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Routes>

                <Route exact path="expenses" element={<Expenses/>}/>
                <Route path="invoices" element={<Invoices/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="user/:id" element={<User/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="/" element={<App/>}/>
            </Routes>
        </>
    );
}
