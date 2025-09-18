import React from "react";
import Image from "next/image";
import "./PersonalDetailsCard.css";
import Socials from "../Socials/Socials";

const PersonalDetailsCard = () => {
  return (
    <div className="personal-details-card">
      <div className="personal-details-name-and-image">
        <Image
          width="200"
          height="200"
          src="/personal-webapp/Jonathan_Flinchum.jpg"
          alt="Picture of Jonathan Flinchum"
        />

        <h1 className="personal-name">Jonathan Flinchum</h1>
        <a
          href="mailto:jonathan.p.flinchum@gmail.com"
          aria-label="Email jonathan.p.flinchum@gmail.com"
        >
          jonathan.p.flinchum@gmail.com
        </a>
      </div>

      <hr />

      <h2 className="personal-about">About</h2>
      <p className="personal-details">
        {
          "Hello! I'm Jonathan Flinchum, a frontend software engineer that likes to build and tinker."
        }
      </p>
      <hr />
      <Socials />
    </div>
  );
};

export default PersonalDetailsCard;
