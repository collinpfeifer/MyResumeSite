/* eslint-disable max-len */
import React from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
// import Experience from './Experience';

const projects = [
  {
    title: 'hello friend',
    icon: 'fas fa-address-book',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 1,
  },
  {
    title: 'Recluse Stream',
    icon: 'fas fa-spider',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 2,
  },
  {
    title: 'My project2',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 3,
  },
  {
    title: 'My project3',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 4,
  },
  {
    title: 'My project4',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 5,
  },
  {
    title: 'My project5',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 6,
  },
];

// eslint-disable-next-line no-unused-vars

const App = () => {
  return (
    <>
      <Navbar />
      <div className='uk-flex uk-flex-column uk-flex-wrap uk-flex-wrap-middle'>
        <div className='appmain'>
          <AboutMe />
          <Projects projects={projects} />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
