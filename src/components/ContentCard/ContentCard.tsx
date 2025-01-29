import React from 'react';
import './ContentCard.css'

interface ContentCardProps {
  title?: React.ReactElement | string;
  description?: React.ReactElement | string;
}

const ContentCard = ({ title, description }: ContentCardProps) => {


  return (
    <div className='content-card'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ContentCard;