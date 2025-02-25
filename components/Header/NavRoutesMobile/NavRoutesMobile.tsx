import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import './NavRoutesMobile.css';

const ThemeToggle = dynamic(() => import('../../ThemeToggle/ThemeToggle'), { ssr: false })

const NavRoutesMobile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='nav-routes-mobile'>
      {
        open ? (
          <div className='nav-routes-mobile-sidebar'>
            <button onClick={handleClick} className={`size-5 ml-auto mr-7 mt-5 block p-0 bg-transparent border-none text-inherit cursor-pointer hover:text-[var(--foreground-hover)]`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 50 50">
                <path fill='currentColor' d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
            </button>
            <ul className='[&_a]:no-underline'>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <ThemeToggle className='nav-theme-toggle' />
              </li>
            </ul>
          </div>
        ) :
          null
      }
      <button onClick={handleClick} className={`mr-2 size-5 p-0 bg-transparent border-none text-inherit cursor-pointer hover:text-[var(--foreground-hover)]`}>
        <svg xmlns="http://www.w3.org/2000/svg" width='20px' height='20px' viewBox='0 0 50 50'>
          <path fill='currentColor' d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>
      </button>
    </div>
  );
}

export default NavRoutesMobile;