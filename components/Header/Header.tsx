import React from 'react';
import Link from 'next/link';
import './Header.css';
import NavRoutesMobile from './NavRoutesMobile/NavRoutesMobile';
import NavRoutesDesktop from './NavRoutesDesktop/NavRoutesDesktop';

const Header = () => {

  return (
    <header id='header' className='p-[21px] text-[18px] flex bg-[var(--background-secondary)]'>
      <div className='mr-auto font-bold'>
        <Link href="/" className='no-underline'>Jonathan Flinchum </Link>
      </div>
      <nav className='navigation-header'>
        <NavRoutesDesktop />
        <NavRoutesMobile />
      </nav>
    </header>
  );
}

export default Header;