import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Hover from '../Hover/Hover';
import { Icon } from '@iconify/react';

function EducationItem({ name, description, courses, cardClass }) {
  const [hover, setHover] = useState(false);
  return (
    <Fade bottom>
      <Hover>
        <div className="card-flip">
          <div className="card-flip-inner" id="flip">
            {/* <Fade bottom when={hover} collapse>
              <div
                style={{
                  position: 'absolute',
                  width: '60px',
                  height: '30px',
                  borderRadius: '0 45px 45px 0',
                  top: '-10px',
                  right: '10px',
                  background: '#ccc',
                }}
                onClick={() => {
                  document.getElementById('flip').style.transform =
                    'rotateY(180deg)';
                }}
              >
                <Icon
                  icon="akar-icons:arrow-forward-thick-fill"
                  width={20}
                  style={{ margin: '1.2rem 0 0 0.5rem' }}
                />
              </div>
            </Fade> */}
            <div
              className="card-front"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <div className={`${cardClass}`}></div>
              <div style={{ position: 'absolute' }}>
                <Fade top when={hover} collapse>
                  <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>
                    {name}
                  </h2>
                </Fade>

                <Fade bottom when={hover} collapse>
                  <h4 style={{ padding: '1rem', color: 'black' }}>
                    {description}
                  </h4>
                </Fade>
              </div>
            </div>
            <div className="card-back">
              <ul>
                {courses.map(course => {
                  return (
                    <li key={course} style={{ fontWeight: '600' }}>
                      {course}
                      <br />
                    </li>
                  );
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
