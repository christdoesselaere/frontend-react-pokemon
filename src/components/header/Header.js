import React from 'react';
import './Header.css';
import headerLogo from '../../assets/pokedex_logo.webp';

function Header() {
    return (
        <header>
        <img id="header-logo" src={headerLogo} alt="pokedex-logo"/>
        </header>
    )
}

export default Header;