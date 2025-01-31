import React from 'react';
import ReactDOM, { Container } from 'react-dom/client';
import './index.css';
import Homepage from './routes/homepage/Homepage.tsx';
import About from './routes/about/About.tsx';
import Resume from './routes/resume/Resume.tsx';
import Contact from './routes/contact/Contact.tsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root') as Container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/personal-webapp">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
