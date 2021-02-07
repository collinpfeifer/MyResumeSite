/* eslint-disable max-len */
import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';
import AboutMe from './AboutMe';

// eslint-disable-next-line no-unused-vars

const App = () => {
  return (
    <>
      <Navbar />
      <div className='uk-flex uk-flex-column uk-flex-wrap uk-flex-wrap-middle'>
        <div className='appmain'>
          <Welcome />
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
