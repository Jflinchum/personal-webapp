import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../../Layout.tsx';
import ContentCard from '../../components/ContentCard/ContentCard.tsx';

function Resume() {
  return (
    <Layout>
      <ContentCard
        title='Resume'
        description={
        <ReactMarkdown children={`
## SKILLS
- Expertise in Javascript, React, Typescript, Redux, Cypress, Jest, Webpack, and StoryBook.
- Proficient with Jenkins, AWS, DevOps, Splunk, Wavefront, and Operational Excellence.
- Familiar with Java, Python, Bash, Git, CI/CD, GraphQL, Software Architecture, and Akamai.


## PROFESSIONAL EXPERIENCE 
### Intuit Inc - Senior Software Engineer 02/2019 - 08/2024
- Lead Developer for Intuit’s Identity Authentication and Account Creation team, building frontend libraries for the Sign In and Sign Up pages of all Intuit products.
- Spearheaded modernization efforts by migrating multiple legacy Javascript/JQuery codebases to React 18 with Typescript and Redux for state management.
- Created automated deployment pipelines within Jenkins to host frontend Javascript assets through the use of Akamai APIs. Implemented similar Jenkins pipelines to deploy backend Java bundles to AWS EC2 servers.
- Performed experiments with alternative authentication methods for customers
such as FIDO WebAuthn biometric logins, which leverages public and private key encryption.
- Partnered cross-product with multiple teams as a domain expert for Identity, guiding others on best practices and creating detailed documentation for interfaces with domain specific language.
- Developed mentorship and integration processes for new engineers to follow in their onboarding.


### Liberty Mutual - Internship, Tech Start Software Engineer
- Worked as a frontend software engineer intern leveraging React to build a web page, allowing customers to manage and update their insurance policy with ease.
- Integrated Cypress tests and helped create common UI component libraries with the collaborative help of UX designers.


### Intuit Inc - Internship, Co-op Software Engineer
- Learned Node.js, React, and Electron to create an internal developer productivity app, which launched virtual machines to configure developer environments.
- First place winner at a company team hackathon for building a demo app to help gig worker job searching.


## EDUCATION
Rochester Institute of Technology Rochester, NY 09/2014 - 12/2018
Bachelor of Sciences in Computer Science - GPA 3.4 (Dean’s List)
          `}/>
        }
      />
    </Layout>
  );
}

export default Resume;
