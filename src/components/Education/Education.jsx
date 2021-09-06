import React from 'react';
import './Education.scss';
import Fade from 'react-reveal/Fade';

const Education = () => {
  return (
    <div
      className="education-main uk-flex uk-flex-center uk-flex-middle uk-flex-column"
      id="education"
    >
      <div className="education-container uk-flex uk-flex-wrap uk-flex-center">
        <Fade left>
          <div className="hse-card uk-flex uk-flex-center uk-flex-middle uk-flex-column">
            <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>
              Hamilton Southeastern High School
            </h2>
            <h4 style={{ padding: '1rem', color: 'black' }}>
              Recieved an Academic Honors diploma while taking 15+ AP and Dual
              Credit classes. Participated in clubs such as Computer Science
              club, euchre club and DECA
            </h4>
          </div>
        </Fade>
        <Fade bottom>
          <div className="udemy-card uk-flex uk-flex-center uk-flex-middle uk-flex-column">
            <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>Udemy</h2>
            <h4 style={{ padding: '1rem', color: 'black' }}>
              Took classes furthering my interests in computer science and web
              development, such as the Modern React and Redux cource, Using
              TypeScript with React, Complete Guide to CSS, etc.
            </h4>
          </div>
        </Fade>
        <Fade right>
          <div className="iu-card uk-flex uk-flex-center uk-flex-middle uk-flex-column">
            <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>
              Indiana University
            </h2>
            <h4 style={{ padding: '1rem', color: 'black' }}>
              Majored in Psychology and Computer Science. Participated in clubs
              found on and off campus such as Psychology Club, IUJUR, and
              Code@IU.
            </h4>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Education;
