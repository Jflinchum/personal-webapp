import React from 'react';
import PortraitImage from './Jonathan_Flinchum.jpg'
import './PersonalDetailsCard.css'


const PersonalDetailsCard = () => {

  return (
    <div className='personal-details-card'>
      <img src={PortraitImage} alt=""/>

      <p className='personal-name'>Jonathan Flinchum</p>
      <a href="mailto:jonflinchum@gmail.com">jonflinchum@gmail.com</a>
    </div>
  );
}

export default PersonalDetailsCard;