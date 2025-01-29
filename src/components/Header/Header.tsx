import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const Header = () => {

  return (
    <header id="header" className="webapp-header">
      <div className="name-titlecard">
        <Link to="/">Jonathan Flinchum </Link>
      </div>
      <nav className='navigation-header'>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;