import React from 'react';
import '../css/AboutMe.css';
import Self from '../self.jpg';

const AboutMe = () => {
  return (
    <div className='aboutmain uk-flex
    uk-flex-center uk-flex-middle uk-flex-column'>
      <img src={Self} alt='self' />
      <h1>
        <span role='img' aria-label='wave'>
          👋{' '}
        </span>
        Hi! I'm Collin Pfeifer
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut en im ad minim
        veniam, quis nostrud exercitation ullamco labori s nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dol or in reprehenderit in voluptate
        velit esse cillum dolore
      </p>
    </div>
  );
};

export default AboutMe;
