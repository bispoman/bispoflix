import React from 'react';
import Logo from '../../assets/bispoflix_logo.png'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Bispoflix Logo" />
            </a>

            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    );
}

export default Menu;