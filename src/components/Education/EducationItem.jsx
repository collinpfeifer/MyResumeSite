import React from 'react';
import Fade from 'react-reveal/Fade';
import Hover from '../Hover/Hover';

function EducationItem({ name, description, courses, cardClass }) {
  return (
    <Fade bottom>
      <Hover>
        <div className="card-flip">
          <div className="card-flip-inner">
            <div className="card-front">
              <div
                className={`uk-flex uk-flex-column uk-flex-center ${cardClass}`}
              >
                <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>{name}</h2>
                <h4 style={{ padding: '1rem', color: 'black' }}>
                  {description}
                </h4>
              </div>
            </div>
            <div className="card-back">
              <ul style={{maxWidth:'80%'}}>
                {courses.map(course => {
                  return <li>{course}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </Hover>
    </Fade>
  );
}

export default EducationItem;
