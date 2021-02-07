/* eslint-disable max-len */
import React from 'react';
import '../css/AboutMe.css';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <div
      className='aboutme-main
      uk-flex
      uk-flex-center
      uk-flex-column
      uk-flex-middle'>
      <div className='wrapper'>
        <div class='box a'>
          <Fade top>
            <h2>Hobbies</h2>
            reading, poker, chess, cooking, debating <br /> discussing deep and
            theoretical ideas is my thing. anything goes from philisophy or
            psychology to politics.
          </Fade>
        </div>
        <div class='box b'>
          <Fade top>
            <h2>Dream Job</h2>
            developer or a college professor specializing in computer science,
            math, or psychology. <br /> <br />
            <h2>Dream City</h2>Washington D.C.{' '}
          </Fade>
        </div>
        <div class='box c'>
          <Fade bottom>
            <h2>Role Models</h2>
            E.O. Scott, Albert Einstein, Bobby Fischer
          </Fade>
        </div>
        <div class='box d'>
          <Fade bottom>
            <h2>Music</h2>
            top artists are Kanye West and Kota the Friend
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
