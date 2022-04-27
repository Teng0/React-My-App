import React from "react";
import {useContext} from "react";
import ThemeProvider from "./ThemeProvider";

export default  function Buttont() {
    const theme = useContext(ThemeProvider);

    return(
        <span >{theme}</span>

    )
}