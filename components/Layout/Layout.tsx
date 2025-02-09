import React from 'react';
import Header from './../Header/Header';
import PersonalDetailsCard from './../PersonalDetailsCard/PersonalDetailsCard';
import './Layout.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className='layout-content'>
        <PersonalDetailsCard/>
        {children}
      </div>
    </div>
  );
}


export default Layout;