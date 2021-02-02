/* eslint-disable max-len */
import React from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';

// eslint-disable-next-line no-unused-vars

const App = () => {
  return (
    <>
      <Navbar />
      <div className='uk-flex uk-flex-column uk-flex-wrap uk-flex-wrap-middle'>
        <div className='appmain'>
          <AboutMe />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
