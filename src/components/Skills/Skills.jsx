/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import Typed from 'typed.js';
import './Skills.scss';
import '../../css/Typed.css';
import {badges} from './badges';
import Fade from 'react-reveal/Fade';
import {Icon} from '@iconify/react';

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

  const renderedBadges = badges.map((badge) => {
    return (
      <div key={badge.description}>
        <article
          onClick={() => setTypedText(badge.description)}
          className="badge black"
        >
          <div className="rounded uk-flex uk-flex-center uk-flex-middle uk-flex-column">
            <Icon icon={badge.font} id="icon" width={badge.size} />
          </div>
        </article>
      </div>
    );
  });

  return (
    <>
      <div
        className="skillsmain uk-flex uk-flex-wrap uk-flex-center uk-flex-middle"
        id="skills"
      >
        <Fade top>
          <div
            className="skillsblock uk-grid uk-grid-medium"
            style={{margin: '0 auto'}}
            data-uk-grid
          >
            {renderedBadges}
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
