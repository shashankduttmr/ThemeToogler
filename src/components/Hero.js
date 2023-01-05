import React, {useContext} from "react";
import ThemeContext from "../context/context"
import Apptheme from "../colors";


function Hero(){
    const theme = useContext(ThemeContext)[0]
    const currentTheme = Apptheme[theme]
    const [ThemeMode, SetThemeMode] = useContext(ThemeContext)

    return(
        <div
            style={{
                padding:"1rem",
                backgroundColor:`${currentTheme.backgroundColor}`,
                color:`${currentTheme.textColor}`,
                textAlign:'center'
            }}   
        >
            <h1>Context API Theme Toogler</h1>
            <p>This is an amazing project</p>
            <button
                style={{
                    backgroundColor:"#26ae60",
                    padding:"10px 150px",
                    fontSize:"20px",
                    color:"#FFF",
                    border:`${currentTheme.border}`
                }}

                onClick={
                    ()=>{
                        SetThemeMode(ThemeMode === 'light' ? 'dark' : 'light')
                    }
                }
            >Change Theme
            </button>
        </div>
    )
}

export default Hero