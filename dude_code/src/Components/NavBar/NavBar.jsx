import './NavBar.css';
import Logo from "../../logo.svg";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';


export default function NavBar(props) {
    return (
        <nav className="NavBar-Container">
            <div className="NavBar-Left">
                <img src={Logo} alt="Logo" className="logo" />
                <span className="brand-name">Dude Code</span>
            </div>
            <ul className="NavBar-Center">
                <li className={props.page === "Home" ? "active" : ""}><Link to={"/"}>Home</Link></li>
                <li className={props.page === "Resource" ? "active": ""}><Link to={"/resource"}>Resource</Link></li>
                <li className={props.page === "Play" ? "active": ""}><Link to={"/playground"}>Play Ground</Link></li>
                <li className={props.page === "Price" ? "active": ""}><Link to={"/pricing"}>Pricing</Link></li>
            </ul>
            <div className="NavBar-Right">
                {/* Intentionally left blank */}
            </div>
        </nav>
    );
}
