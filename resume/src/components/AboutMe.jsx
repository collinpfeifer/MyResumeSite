/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React, {useEffect} from 'react';
import '../css/AboutMe.css';
import Typed from 'typed.js';
import Self from '../self.jpg';

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
      <div class='downArrow bounce'>
        <img
          width='40'
          height='40'
          alt=''
          src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4='
        />
      </div>
    </div>
  );
};

export default AboutMe;
