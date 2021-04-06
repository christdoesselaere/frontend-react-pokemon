import React from 'react';
import './App.css';
import Pokedex from "./components/pokedex/Pokedex";
import headerLogo from './assets/pokedex_logo.webp';
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <img className="header" id="header-logo" src={headerLogo} alt="pokedex-logo"/>
            <Pokedex/>
            <Footer/>
        </>
    );
}

export default App;