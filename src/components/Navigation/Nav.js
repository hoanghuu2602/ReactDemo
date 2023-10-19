import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
function Nav(props) {
    return (
        <div className="topnav">
            <NavLink  to="/home">Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/login">Login</NavLink>
            <aNavLink to="/contact">Contact</aNavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Nav;