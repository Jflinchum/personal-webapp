import React from 'react';
import './Homepage.css';
import Layout from '../../Layout.tsx';
import ContentCard from '../../components/ContentCard/ContentCard.tsx';

function App() {
  return (
    <Layout>
      <ContentCard title='Test' description={'test'}/>
    </Layout>
  );
}

export default App;
