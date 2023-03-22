import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.css';

const Header = () => {
    return (
        <header>
            <nav className='header-parent'>
                <h3>Countries</h3>
                <ul className='header-list'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/detail'}>Detail</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;