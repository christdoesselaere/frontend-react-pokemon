import React from 'react';
import './App.css';
import Pokedex from "./components/Pokedex";
import headerLogo from './assets/pokedex_logo.webp';

function App() {
    return (
        <>
            <img className="header" id="header-logo" src={headerLogo} alt="pokedex-logo"/>
            <div className="pokedex-items">
            <Pokedex/>
            </div>
        </>
    );
}

export default App;
