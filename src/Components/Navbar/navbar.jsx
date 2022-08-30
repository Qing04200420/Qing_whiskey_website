import { NavLink } from "react-router-dom";
import "./navbar.css"
import React, { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return (
        <>
            <nav className={
                navbar 
                ? "navbar navbar-expand fixed-top active" 
                : "navbar navbar-expand fixed-top "}>
                <NavLink to="/" className="navbar-brand">
                    <span>Q</span>ing
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/product" className="nav-link">
                                Product
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;