/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import './Welcome.css';
import Typed from 'typed.js';
import { Icon } from '@iconify/react';
import Self from '../../images/self.jpg';
import Hover from '../Hover/Hover';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  useEffect(() => {
    const options = {
      strings: [
        'Full-Stack Developer',
        'Psych `&amp;` CS Student',
        'Mental Health Advocate',
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
    <>
      <Fade top>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>
        <div className="circle8"></div>
      </Fade>
      <div className="aboutmain uk-flex uk-flex-center uk-flex-middle uk-flex-column">
        <Fade delay={400}>
          <img
            src={Self}
            alt="self"
            style={{ border: '5px white solid' }}
            className="self"
          />
          <h1 className="welcome-h1">
            <span role="img" aria-label="wave">
              👋{' '}
            </span>
            Hi! I'm Collin Pfeifer
          </h1>
          <p
            style={{
              color: 'white',
              fontSize: '1.3rem',
              maxWidth: '30rem',
              textAlign: 'center',
            }}
          >
            I'm a<span id="welcometype"></span>
            hoping to help others through any means I can
          </p>
          <div>
            <Hover>
              <a
                href="https://www.linkedin.com/in/collin-pfeifer-5b77831a7/"
                target="_blank"
              >
                <Icon
                  icon="logos:linkedin-icon"
                  style={{
                    margin: '0.4rem',
                    borderRadius: '10%',
                    background: 'white',
                    textDecoration: 'none',
                  }}
                  width={35}
                />
              </a>
              <p>LinkedIn</p>
            </Hover>
            <Hover>
              <a href="https://twitter.com/pfeifer_collin" target="_blank">
                <Icon
                  icon="logos:twitter"
                  style={{ margin: '0.4rem', textDecoration: 'none' }}
                  width={35}
                />
              </a>
              <p>Twitter</p>
            </Hover>
            <Hover>
              <a href="https://github.com/collinpfeifer" target="_blank">
                <Icon
                  icon="akar-icons:github-fill"
                  style={{
                    margin: '0.4rem',
                    background: 'white',
                    borderRadius: '50%',
                    color: '#000',
                  }}
                  width={35}
                />
              </a>
              <p>GitHub</p>
            </Hover>
            <Hover>
              <a href="../../../static/collin-pfeifer-resume.pdf" download="">
                <Icon
                  icon="fluent:document-one-page-24-filled"
                  style={{
                    margin: '0.4rem',
                  }}
                  width={35}
                  color="#ccc"
                />
              </a>
              <p>Resumé</p>
            </Hover>
          </div>
        </Fade>
      </div>
      <div className="downArrow">
        <img
          width="40"
          height="40"
          alt=""
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
        />
      </div>
    </>
  );
};

export default AboutMe;
