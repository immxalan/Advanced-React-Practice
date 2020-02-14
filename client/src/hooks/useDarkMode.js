import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);
//useEffect is used to "watch" for something
    useEffect(() => {
        if (darkMode === true){
            document.querySelector("body").classList.add("dark-mode");
        } else{
            document.querySelector("body").classList.remove("dark-mode");
        }
    }, [darkMode])
//include dependency array - runs as a brake
    return [darkMode, setDarkMode];
}