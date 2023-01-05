import React, {useContext} from "react"
import ThemeContext from "./../context/context"

function ThemeToogler(){
    const [theme] = useContext(ThemeContext)
    return(
        <div>
            <span>{theme === 'light' ? 'Turn off lights' : 'Turn on lights'}</span>
        </div>
    )
}

export default ThemeToogler