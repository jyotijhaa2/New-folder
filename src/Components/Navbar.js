import React from 'react';
import './../../src/App.css';
import {Link} from "react-router-dom";

 function Navbar() {
    return (
        <>
        <div className='container'>
        <div className='nav-container' >
            <ul className='topnav'>
            <li>Home</li>
                <Link to="/"></Link>
                <li> Bollywood
                              <Link to="/SecondPage.js"></Link>
                   </li>
                <li>Technology
                </li>
                <li>Hollywood</li>
                <li>Fitness</li>
                <li>Food</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Navbar;