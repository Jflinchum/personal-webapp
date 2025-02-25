import React from 'react';
import type { Metadata } from "next";
import Link  from 'next/link';
import Layout from '../components/Layout/Layout';
import ContentCard from '../components/ContentCard/ContentCard';

export const metadata: Metadata = {
  title: "Jonathan Flinchum",
  description: "Personal website for Jonathan Flinchum, a frontend software engineer who builds awesome user experiences for the web.",
};

const HomepageDescription = () => {
  return (
    <>
      <p>
        Welcome to my corner on the internet, thanks for stopping by!
        Feel free to read <Link href='/about'>more about me</Link>, <Link href='https://github.com/Jflinchum'>view some of my projects</Link>,
        or <Link href='/contact'>contact me</Link>.
      </p>
      <p>
        Source code for this webpage can be found <a href='https://github.com/Jflinchum/personal-webapp' target='_blank' rel="noreferrer noopener">here</a>.
      </p>
    </>
  );
};

const Homepage = () => {
  return (
    <Layout>
      <ContentCard 
        title='Home'
        description={<HomepageDescription/>}/>
    </Layout>
  );
}

export default Homepage;
