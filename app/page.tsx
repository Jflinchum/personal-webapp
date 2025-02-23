import React from 'react';
import type { Metadata } from "next";
import Link  from 'next/link';
import Layout from '../components/Layout/Layout';
import ContentCard from '../components/ContentCard/ContentCard';

export const metadata: Metadata = {
  title: "Jonathan Flinchum",
  description: "Personal website for Jonathan Flinchum",
};

const HomepageDescription = () => {
  return (
    <p>
      Welcome to my corner in the world wide web, thanks for stopping by!
      Feel free to read <Link href='/about'>more about me</Link>, <Link href='https://github.com/Jflinchum'>view some of my projects</Link>,
      or <Link href='/contact'>contact me</Link>.
    </p>
  );
};

const Homepage = () => {
  return (
    <Layout>
      <ContentCard 
        title='Homepage'
        description={<HomepageDescription/>}/>
    </Layout>
  );
}

export default Homepage;
