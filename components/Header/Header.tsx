import React from 'react';
import Link from 'next/link';
import './Header.css';
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('../ThemeToggle/ThemeToggle'), { ssr: false })

const Header = () => {

  return (
    <header id='header' className='p-[21px] text-[18px] flex bg-[var(--background-secondary)]'>
      <div className='mr-auto font-bold'>
        <Link href="/" className='no-underline'>Jonathan Flinchum </Link>
      </div>
      <nav className='navigation-header'>
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
      </nav>
    </header>
  );
}

export default Header;