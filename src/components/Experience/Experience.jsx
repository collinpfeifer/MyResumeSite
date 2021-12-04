import React from 'react';
import {experience} from './experience.js';
import ExperienceItem from './ExperienceItem.jsx';
import './Experience.scss';

const Experience = () => {
  return (
    <>
      <div
        className="container
      uk-flex
      uk-flex-center
      uk-flex-column
      uk-flex-middle"
        id="experience"
      >
        <div className="main-timeline">
          {experience.map(role => {
            return (
              <ExperienceItem
                name={role.name}
                description={role.description}
                company={role.company}
                link={role.link}
                timeline={role.timeline}
                picture={role.picture}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
