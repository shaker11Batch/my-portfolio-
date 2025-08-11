import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <a href="#" className='logo'>Protfolio.</a>
                <ul>
                <li className='active'><a href="£">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Contact</a></li>
                </ul>
            </nav> 
        </div>
    );
};

export default Navbar;