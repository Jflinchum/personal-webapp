import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './NavRoutesDesktop.css';

const NavRoutesDesktop = () => {
  return (
    <div className='nav-routes-desktop'>
      <ul className='p-0 m-0 *:inline *:pr-[20px] [&_a]:no-underline'>
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
  );
}

export default NavRoutesDesktop;