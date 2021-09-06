/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout/Layout';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Welcome from '../components/Welcome/Welcome.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Experience from '../components/Experience/Experience.jsx';
import AboutMe from '../components/AboutMe/AboutMe.jsx';
import Education from '../components/Education/Education.jsx';
import '../css/index.css';

const App = () => {
  return (
    <>
      <ReactNotification />
      <Layout page="index">
        <div className="uk-flex uk-flex-column uk-flex-wrap uk-flex-wrap-middle">
          <div className="appmain">
            <Welcome />
            <AboutMe />
            <Projects />
            <Skills />
            <Education />
            <Experience />
            <Contact />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default App;
