import React from 'react';
import Layout from '../../Layout.tsx';
import ContentCard from '../../components/ContentCard/ContentCard.tsx';

function Resume() {
  return (
    <Layout>
      <ContentCard title='Resume' description={'test'}/>
    </Layout>
  );
}

export default Resume;
