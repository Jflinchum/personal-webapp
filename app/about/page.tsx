import React from 'react';
import Layout from '../../components/Layout/Layout';
import ContentCard from '../../components/ContentCard/ContentCard';

function About() {
  return (
    <Layout>
      <ContentCard title='About' description={'test'}/>
    </Layout>
  );
}

export default About;
