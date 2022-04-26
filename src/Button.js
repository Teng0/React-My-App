import {useContext} from "react";
import ThemeProvider from "./ThemeProvider";

export default  function Buttont() {
    const theme = useContext(ThemeProvider);
    console.log(theme);
    return(
        <span >{theme}</span>

    )
}