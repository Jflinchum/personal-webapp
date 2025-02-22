import React from 'react';
import './ContentCard.css'

interface ContentCardProps {
  title?: React.ReactElement | string;
  description?: React.ReactElement | string;
}

const ContentCard = ({ title, description }: ContentCardProps) => {
  return (
    <div className='content-card'>
      <h1 className='content-header'>{title}</h1>
      <hr/>
      <div className='content-body'>
        {description}
      </div>
    </div>
  );
}

export default ContentCard;