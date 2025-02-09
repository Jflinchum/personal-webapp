import React from 'react';
import Link from 'next/link';
import './Header.css';

const Header = () => {

  return (
    <header id="header" className="webapp-header">
      <div className="name-titlecard">
        <Link href="/">Jonathan Flinchum </Link>
      </div>
      <nav className='navigation-header'>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;