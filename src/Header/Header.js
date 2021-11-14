import React from 'react';
import './Header.scss';
import logo from './logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='typemaster'></img>
            <a href='https://github.com/MarleyReyna'>Pre-order now</a>
        </header>
    );
}
 
export default Header;