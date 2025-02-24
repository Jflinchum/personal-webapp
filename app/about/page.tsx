import React from 'react';
import type { Metadata } from "next";
import Layout from '../../components/Layout/Layout';
import ContentCard from '../../components/ContentCard/ContentCard';

export const metadata: Metadata = {
  title: "About",
  description: "About Jonathan Flinchum",
};

function About() {
  return (
    <Layout>
      <ContentCard title='About' description={
        <article>
          <h2>Intro</h2>
          <p>
            I am a software engineer who is passionate about crafting intuitive and impactful user experiences,
            while writing simple and easy to understand code! Apart from creating accessible and performant UI,
            my favorite part about my work is teaching others and creating documentation for people to learn from.
          </p>
          <p>
            In my previous role at Intuit, I was a Senior Software Engineer for the Authentication and Account Creation
            team. There, I was responsible for maintining the log in and sign up pages for all products at Intuit. I primarily
            did frontend work, however I picked up many devops and infrastructure skills along the way. One of my favorite projects
            involved a complete codebase rewrite from (relatively) ancient technologies to React, while documenting all of our
            experiences in Storybook!
          </p>
          <p>
            In my spare time, I'm usually hiking, playing piano, or button mashing in my favorite video game.
          </p>
        </article>
      }/>
    </Layout>
  );
}

export default About;
