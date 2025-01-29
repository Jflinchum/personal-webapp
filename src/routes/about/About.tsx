import React from 'react';
import Layout from '../../Layout.tsx';
import ContentCard from '../../components/ContentCard/ContentCard.tsx';

function About() {
  return (
    <Layout>
      <ContentCard title='About' description={'test'}/>
    </Layout>
  );
}

export default About;
