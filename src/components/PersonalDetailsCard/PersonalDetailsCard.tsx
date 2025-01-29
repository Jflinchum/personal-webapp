import React from 'react';
import { Link } from 'react-router';
import PortraitImage from './Jonathan_Flinchum.jpg';
import './PersonalDetailsCard.css';


const PersonalDetailsCard = () => {

  return (
    <div className='personal-details-card'>
      <img src={PortraitImage} alt=""/>

      <h1 className='personal-name'>Jonathan Flinchum</h1>
      <a href="mailto:jonflinchum@gmail.com">jonflinchum@gmail.com</a>

      <hr/>

      <h2 className='personal-about'>About</h2>
      <p className='personal-details'>
        {
          "Hello! I'm Jonathan Flinchum, a frontend software engineer that likes to build and tinker."
        }
      </p>

      <Link to="/resume" className='personal-primary-button'>Learn More</Link>

      <hr/>
    </div>
  );
}

export default PersonalDetailsCard;