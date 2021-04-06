import React from 'react';
import './App.css';
import Pokedex from "./components/pokedex/Pokedex";
import headerLogo from './assets/pokedex_logo.webp';

function App() {
    return (
        <>
            <img className="header" id="header-logo" src={headerLogo} alt="pokedex-logo"/>
            <Pokedex/>
        </>
    );
}

export default App;