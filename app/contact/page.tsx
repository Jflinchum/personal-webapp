import React from 'react';
import Layout from '../../components/Layout/Layout';
import ContentCard from '../../components/ContentCard/ContentCard';

const ContactDescription = () => {
  return (
    <>
      <p>Write me an email, or reach out in other ways!</p>
      <a href='mailto:jonflinchum@gmail.com'>jonflinchum@gmail.com</a>
    </>
  );
};

function Contact() {
  return (
    <Layout>
      <ContentCard title='Contact' description={<ContactDescription/>}/>
    </Layout>
  );
};

export default Contact;
