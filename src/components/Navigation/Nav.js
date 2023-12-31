import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom';
function Nav(props) {
    return (
        <div className="topnav">
            <NavLink  to="/">Home</NavLink>
            <NavLink to="/following">Following</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Nav;