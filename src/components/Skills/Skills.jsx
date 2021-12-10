/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import Hover from '../Hover/Hover';
import { badges } from './badges';
import Fade from 'react-reveal/Fade';
import { Icon } from '@iconify/react';
import './Skills.scss';
import './Typed.css';

const Skills = () => {
  const [typedText, setTypedText] = useState('$ Select a skill');

  useEffect(() => {
    const options = {
      strings: [typedText],
      typeSpeed: 40,
    };
    const typed = new Typed('#type', options);
    return () => {
      typed.destroy();
    };
  }, [typedText]);

  return (
    <>
      <div
        className="uk-flex uk-flex-wrap uk-flex-center uk-flex-middle"
        id="skills"
      >
        <Fade top>
          <div className="skillsblock" data-uk-grid>
            {badges.map(badge => {
              return (
                <Hover key={badge.description}>
                  <article
                    onClick={() => setTypedText(badge.description)}
                    className="badge black"
                  >
                    <div className="rounded uk-flex uk-flex-center uk-flex-middle uk-flex-column">
                      <Icon icon={badge.font} id="icon" width='3.7rem' />
                    </div>
                  </article>
                </Hover>
              );
            })}
          </div>
        </Fade>
        <Fade bottom>
          <div className="terminal">
            <div className="top">
              <div className="buttons">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="title">zsh--60x80</div>
            </div>
            <div className="typed">
              <span id="type"></span>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Skills;
