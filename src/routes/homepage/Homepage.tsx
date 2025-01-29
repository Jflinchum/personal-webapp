import React from 'react';
import Layout from '../../Layout.tsx';
import ContentCard from '../../components/ContentCard/ContentCard.tsx';

function Homepage() {
  return (
    <Layout>
      <ContentCard title='Homepage' description={'test'}/>
    </Layout>
  );
}

export default Homepage;
