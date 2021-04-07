import React from 'react';
import './Footer.css';
import gitHub from '../../assets/github-mark.png'

function Footer() {
    return (
        <footer>
            <img src={gitHub} alt="GitHub" id="github-logo"/>
            <span>
                <a href="https://github.com/christdoesselaere">christdoesselaere</a>
            </span>
        </footer>
    )
}

export default Footer;