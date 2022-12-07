import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='navbar-container'>
            <div className='icon'>
                <h1>LEARN REDUX</h1>
            </div>
            <nav className='nav'>
                <NavLink className='link' to={'/'}>Home</NavLink>
                <NavLink className='link' to={'/class'}>Class</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;