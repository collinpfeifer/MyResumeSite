/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import Typed from 'typed.js';
import '../css/Skills.scss';
import '../css/Typed.css';

const badges = [
  {
    font: 'fab fa-html5',
    description:
      '$ whatis html5<br/> `$ HTML5 (Hypertext Markup Language): The building blocks or skeleton of the internet`<br/> $ ^3000 cat collin_pfeifer.html<br/> ^1500 `HTML5:` <br/> `Overall: [################-] (95%)` <br/> `Classic HTML: [################-](97%)` <br/> `PUG: [##############---] (85%)` <br/> `Haml: [############-----] (75%)` <br/> `Slim: [##############---] (85%)` <br/> ^1000 $ ',
  },
  {
    font: 'fab fa-css3-alt',
    description:
      '$ whatis css3<br/> `CSS3 (Cascading Style Sheets): The presentation and the color of the internet`',
  },
  {
    font: 'fab fa-js-square',
    description: '$ nuggets',
  },
  {
    font: 'fab fa-react',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-angular',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-php',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-cuttlefish',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-node',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-python',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-sass',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-bootstrap',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    font: 'fab fa-java',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];

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
      <div>
        <article
          key={badge.font}
          onClick={() => setTypedText(badge.description)}
          className='badge black'>
          <div className='rounded'>
            <i className={badge.font} />
          </div>
        </article>
      </div>
    );
  });

  return (
    <>
      <div className='skillsmain uk-flex uk-flex-center uk-flex-middle'>
        <div
          className='uk-grid uk-grid-column-large uk-gid-row-medium'
          data-uk-grid>
          {renderedBadges}
        </div>
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
    </>
  );
};

export default Skills;
