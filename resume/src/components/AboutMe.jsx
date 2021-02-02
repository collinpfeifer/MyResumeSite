/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React, {useEffect} from 'react';
import '../css/AboutMe.css';
import Typed from 'typed.js';
import Self from '../self.jpg';
import BounceArrow from './BounceArrow';

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
    const typed = new Typed('#abouttype', options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className='aboutmain uk-flex
    uk-flex-center uk-flex-middle uk-flex-column'>
      <img src={Self} alt='self' style={{border: '3px black solid'}} />
      <h1>
        <span role='img' aria-label='wave'>
          👋{' '}
        </span>
        Hi! I'm Collin Pfeifer
      </h1>
      <div style={{textAlign: 'center', height: '1%'}}>
        <span id='abouttype'>
          {/* . <br />I live in Indiana and a couple hobbies
          include reading, poker, chess, and cooking. <br />I
          love discussing deep and theoretical ideas in topics ranging from
          philisophy or psychology to politics and am a big fan of modern stoics
          and altrusits like E.O. Scott and Rabbi Yehuda Ashlag.  */}
        </span>
      </div>
      <BounceArrow direction='down'/>
    </div>
  );
};

export default AboutMe;
