import React from "react";
import ThemeToogler from "./ThemeToogler";

function Header(){
    return(
        <header style={{
            textAlign:"center"
        }}>
            <h1>Theme Toogler App</h1>
            <ThemeToogler/>
        </header>
    )
}

export default Header