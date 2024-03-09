import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-warning'>
            <nav className='menu pt-2 pb-2 text-dark'>
                <a href="home">Home</a>
                <a href="countries">Countries</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Header;