import React from 'react';
import './../../src/App.css';
import {Link} from "react-router-dom";

 function Navbar() {
    return (
        <>
        <div className='container'>
        <div className='nav-container' >
            <ul className='topnav'>
            <li></li>
                <Link to="/">Home</Link>
                <li> 
                              <Link to="/SecondPage">Bollywood</Link>
                   </li>
                <li><Link to="/ThirdPage">Technology</Link>
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
