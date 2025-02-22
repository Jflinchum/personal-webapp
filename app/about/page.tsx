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
      <ContentCard title='About' description={'test'}/>
    </Layout>
  );
}

export default About;
