/* eslint-disable max-len */
import React from 'react';
import NavBar from './Navbar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
// import Contact from './Contact';
// import Experience from './Experience';

const projects = [
  {
    title: 'hello friend',
    icon: 'fas fa-address-book',
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project1',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project2',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project3',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project4',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project5',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
  },
];

const badges = [
  {
    color: 'orange',
    font: 'fab fa-html5',
    description:
      '$ whatis html5<br/> `$ HTML5 (Hypertext Markup Language): The building blocks or skeleton of the internet developed by Tim Berners-Lee`<br/> $ ^4000 cat collin_pfeifer.html<br/> ^1500 `HTML5:` <br/> `Overall: [################-] (95%)` <br/> `Classic HTML: [################-](97%)` <br/> `PUG: [##############---] (85%)` <br/> `Haml: [############-----] (75%)` <br/> `Slim: [##############---] (85%)` <br/> ^1000 $ ',
  },
  {
    color: 'blue',
    font: 'fab fa-css3-alt',
    description: '$ whatis css3<br/>',
  },
  {
    color: 'gold',
    font: 'fab fa-js-square',
    description: '$ nuggets',
  },
  {
    color: 'blue',
    font: 'fab fa-react',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'crimson',
    font: 'fab fa-angular',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'purple',
    font: 'fab fa-php',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'blue',
    font: 'fab fa-cuttlefish',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'green',
    font: 'fab fa-node',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'steel',
    font: 'fab fa-python',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'pink',
    font: 'fab fa-sass',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'rebecca',
    font: 'fab fa-bootstrap',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    color: 'gainsboro',
    font: 'fab fa-java',
    description:
      '$ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];

const App = () => {
  return (
    <>
      <NavBar />
      <div className='uk-flex uk-flex-column uk-flex-wrap uk-flex-wrap-middle'>
        <div className='appmain'>
          <AboutMe />
          <Projects projects={projects} />
          <Skills badges={badges} />
        </div>
      </div>
    </>
  );
};

export default App;
