import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class='leftPart'>
                <div class='navbarLeftItem'>Home</div>
                <div class='navbarLeftItem'>Descargar</div>
                <div class='navbarLeftItem'>How to</div>
            </div>
            <div class='rightPart'>
                Iniciar sessió
            </div>
        </nav>
    );
};

export default Navbar;