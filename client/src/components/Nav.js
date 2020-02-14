import React from "react";
import { useDarkMode } from "../hooks/useDarkMode.js";

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode("Dark mode", false);
    //anything with a "use" as part of it's name, react knows is a hook
    console.log("This is from Nav.js file", typeof(false))
    const toggle = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    return (
        <nav className="navbar">
            <h1 className="nav-title"> Men's Soccer Players - World Ranking</h1>
            <button onClick={toggle} className="btn">Change</button>
        </nav>
    )
}
export default Nav;