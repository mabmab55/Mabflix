import React from 'react';
import Logo from '../../assets/img/mabflixlogo.png';
import './Menu.css';
import Button from '../Button/index'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Mabflix"/>
            </a>

            <Button className="ButtonLink" href="/" >
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu;