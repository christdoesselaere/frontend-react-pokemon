import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Pokedex from "./components/pokedex/Pokedex";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Pokedex/>
            <Footer/>
        </>
    );
}

export default App;