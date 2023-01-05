import React, {useState} from "react";
import ThemeContext from "./context/context"
import Header from "./components/Header";
import Hero from "./components/Hero";

function App(){
    const defaultHook = useState('light')
    return (
        <ThemeContext.Provider
            value={defaultHook}
        >
            <Header/>
            <Hero/>
        </ThemeContext.Provider>
    )
}

export default App