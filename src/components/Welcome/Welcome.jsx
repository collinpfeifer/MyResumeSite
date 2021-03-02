/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React, {useEffect} from 'react';
import './Welcome.css';
import Typed from 'typed.js';
import Self from './self.jpg';
import BounceArrow from '../BounceArrow/BounceArrow';

const AboutMe = () => {
  useEffect(() => {
    const options = {
      strings: [
        'Full Stack Developer `🖥️`',
        'Student `🎓`',
        'Mental Health Advocate `🧠`',
      ],
      typeSpeed: 100,
      backDelay: 2500,
      loop: true,
      backSpeed: 0,
      showCursor: false,
    };
    const typed = new Typed('#welcometype', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className='aboutmain uk-flex
    uk-flex-center uk-flex-middle uk-flex-column'>
      <img
        src={Self}
        alt='self'
        style={{border: '3px black solid'}}
        className='self'
      />
      <h1 className='welcome-h1'>
        <span role='img' aria-label='wave'>
          👋{' '}
        </span>
        Hi! I'm Collin Pfeifer
      </h1>
      <div style={{textAlign: 'center', height: '1%'}}>
        <span id='welcometype'>
        </span>
      </div>
      <BounceArrow direction='down' />
    </div>
  );
};

export default AboutMe;
