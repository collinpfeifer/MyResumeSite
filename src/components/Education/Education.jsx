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
