import React from 'react';
import logo from "../../assets/logo.png";
import './styles.css'

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header>
        <div className="logo-area">
            <img src={logo} alt="logo omma" />
        </div>
        <nav className="menu">
            <ul>
                <li>
                    <a href='#'>Início</a>
                </li>
                <li>
                <a href='#'>Receitas</a>
                </li>
                <li>
                <a href='#'>Contato</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;