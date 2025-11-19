import React from "react";
import './nav.css'

function Navbar(props){
    return(
        <nav className="navbar">
            <h2>{props.name}</h2>
            <h2 className="navbar-title"></h2>
            <ul className="navbar-links">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        
    );
}

export default Navbar;