import React from 'react';
import type { Metadata } from "next";
import Layout from '../../components/Layout/Layout';
import ContentCard from '../../components/ContentCard/ContentCard';

export const metadata: Metadata = {
  title: "About",
  description: "About Jonathan Flinchum",
};

function About() {
  return (
    <Layout>
      <ContentCard title='About' description={
        <article>
          <h2>Intro</h2>
          <p>
            I am a frontend-oriented software engineer that enjoys tinkering and building apps!
          </p>
        </article>
      }/>
    </Layout>
  );
}

export default About;
