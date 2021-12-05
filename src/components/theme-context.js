import react from "react";

export const themes = {
    dark:{
        color: "white",
        background:"#63635f"
    },
    light:{
        color: "black",
        background:"white"
    }
}

const ThemeContext = react.createContext(themes.dark)

export default ThemeContext;