import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/header.scss';

function Header() {

  return (
    <header id="home">
      <NavLink exact="true" to="/"><h1>AB.</h1></NavLink>
      <nav className='navbar'>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
};

export default Header;



