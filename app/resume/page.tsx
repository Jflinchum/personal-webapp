import React from 'react';
import Layout from '../../components/Layout/Layout';
import ContentCard from '../../components/ContentCard/ContentCard';

function Resume() {
  return (
    <Layout>
      <ContentCard
        title='Resume'
        description={
          <article>
            <h2>Skills</h2>
            <ul>
              <li>Expertise in Javascript, React, Typescript, Redux, Cypress, Jest, Webpack, and StoryBook.</li> 
              <li>Proficient with Jenkins, AWS, DevOps, Splunk, Wavefront, and Operational Excellence.</li> 
              <li>Familiar with Java, Python, Bash, Git, CI/CD, GraphQL, Software Architecture, and Akamai.</li> 
            </ul>
            <h2>Professional Experience</h2>
              <h3 className='mb-0'>Intuit Inc - Senior Software Engineer</h3>
              <p className='mt-0 font-light text-sm italic'>02/2019 - 08/2024</p>
              <ul>
                <li>Lead Developer for Intuit’s Identity Authentication and Account Creation team, building frontend libraries for the Sign In and Sign Up pages of all Intuit products.</li>
                <li>Spearheaded modernization efforts by migrating multiple legacy Javascript/JQuery codebases to React 18 with Typescript and Redux for state management.</li>
                <li>Created automated deployment pipelines within Jenkins to host frontend Javascript assets through the use of Akamai APIs. Implemented similar Jenkins pipelines to deploy backend Java bundles to AWS EC2 servers.</li>
                <li>Performed experiments with alternative authentication methods for customers such as FIDO WebAuthn biometric logins, which leverages public and private key encryption.</li>
                <li>Partnered cross-product with multiple teams as a domain expert for Identity, guiding others on best practices and creating detailed documentation for interfaces with domain specific language.</li>
                <li>Developed mentorship and integration processes for new engineers to follow in their onboarding.</li>
              </ul>
              <h3 className='mb-0'>Liberty Mutual - Internship, Tech Start Software Engineer</h3>
              <p className='mt-0 font-light text-sm italic'>06/2018 - 08/2018</p>
              <ul>
                <li>Worked as a frontend software engineer intern leveraging React to build a web page, allowing customers to manage and update their insurance policy with ease.</li>
                <li>Integrated Cypress tests and helped create common UI component libraries with the collaborative help of UX designers.</li>
              </ul>
              <h3 className='mb-0'>Intuit Inc - Internship, Co-op Software Engineer</h3>
              <p className='mt-0 font-light text-sm italic'>06/2016 - 12/2016</p>
              <ul>
                <li>Learned Node.js, React, and Electron to create an internal developer productivity app, which launched virtual machines to configure developer environments.</li>
                <li>First place winner at a company team hackathon for building a demo app to help gig worker job searching.</li>
              </ul>
            <h2>Education</h2>
            <div className='ml-6'>
              <p className="mb-0 font-bold">Rochester Institute of Technology</p>
              <p className='mt-0 font-light text-sm italic'>09/2014 - 12/2018</p>
              <p className='m-0'>Bachelor of Sciences in Computer Science - GPA 3.4 (Dean’s List)</p>
            </div>
        </article>
        }
      />
    </Layout>
  );
}

export default Resume;
