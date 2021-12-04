import React from 'react';
import EducationItem from './EducationItem.jsx';
import { education } from './education.js';
import './Education.scss';

const Education = () => {
  return (
    <div
      className="education-container uk-flex uk-flex-center uk-flex-wrap"
      data-uk-height-match="target: > div > div > div"
      id="education"
    >
      {/* <Fade left>
        <Hover>
          <div className="hse-card uk-flex uk-flex-middle uk-flex-column uk-flex-center ">
            <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>
              Hamilton Southeastern High School
            </h2>
            <h4 style={{ padding: '1rem', color: 'black' }}>
              Received an Academic Honors diploma while taking 15+ AP and Dual
              Credit classes. Participated in clubs such as Computer Science
              club, euchre club and DECA
            </h4>
          </div>
        </Hover>
      </Fade>

      <Fade bottom>
        <Hover>
          <div className="udemy-card uk-flex uk-flex-middle uk-flex-column uk-flex-center ">
            <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>Udemy</h2>
            <h4 style={{ padding: '1rem', color: 'black' }}>
              Took classes furthering my interests in computer science and web
              development, such as the Modern React and Redux cource, Using
              TypeScript with React, Complete Guide to CSS, etc.
            </h4>
          </div>
        </Hover>
      </Fade>

      <Fade top>
        <Hover>
          <div className="iu-card uk-flex uk-flex-middle uk-flex-column uk-flex-center ">
            <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>
              Indiana University
            </h2>
            <h4 style={{ padding: '1rem', color: 'black' }}>
              Majored in Psychology and Computer Science. Participated in clubs
              found on and off campus such as Psychology Club, IUJUR, and
              Code@IU.
            </h4>
          </div>
        </Hover>
      </Fade>

      <Fade right>
        <Hover>
          <div className="linkedin-card uk-flex uk-flex-middle uk-flex-center uk-flex-column">
            <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>
              LinkedIn Learning
            </h2>
            <h4 style={{ padding: '1rem', color: 'black' }}>
              Took courses furthering my professional career in computer
              science, ethcial hacking, and business, such the Foundations of
              Entrepreneurship
            </h4>
          </div>
        </Hover>
      </Fade> */}
      {education.map(card => {
        return (
          <EducationItem
            name={card.name}
            description={card.description}
            courses={card.courses}
            cardClass={card.cardClass}
          />
        );
      })}
    </div>
  );
};

export default Education;
