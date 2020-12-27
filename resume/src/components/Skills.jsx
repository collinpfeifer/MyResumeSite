import React, {useState, useEffect} from 'react';
import Typed from 'typed.js';
import '../css/Skills.scss';
import '../css/Typed.css';

const Skills = ({badges}) => {
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
      <article
        key={badge.font}
        onClick={() => setTypedText(badge.description)}
        className={`badge ${badge.color}`}>
        <div className='rounded'>
          <i className={badge.font}></i>
        </div>
      </article>
    );
  });

  return (
    <div className='skillsmain uk-flex uk-flex-center uk-flex-middle'>
      <div className='wrapper'>{renderedBadges}</div>
      <div className='terminal'>
        <div className='top'>
          <div className='buttons'>
            <span className='circle red'></span>
            <span className='circle yellow'></span>
            <span className='circle green'></span>
          </div>
          <div className='title'>zsh--60x80</div>
        </div>
        <div className='typed'>
          <span id='type'></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
