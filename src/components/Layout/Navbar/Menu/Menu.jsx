import React from 'react';
import './Menu.css';
import { Link } from 'react-scroll';
import {Link as GatsbyLink} from 'gatsby'

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <nav
      className="uk-flex uk-flex-column uk-flex-center"
      style={{
        background: 'rgb(64, 0, 126)',
        transform: `${open ? 'translateX(0)' : 'translateX(-100%)'}`,
        height: '100%',
        textAlign: 'left',
        padding: '2rem',
        position: 'fixed',
        top: '0',
        left: '0',
        transition: 'transform 0.3s ease-in-out',
        zIndex: '100',
      }}
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Link className="menu-a" to="aboutme" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️ </span>
        About Me
      </Link>
      <Link className="menu-a" to='projects' tabIndex={tabIndex}>
        <span aria-hidden="true">💸 </span>
        Projects
      </Link>
      <Link className="menu-a" to='skills' tabIndex={tabIndex}>
        <span aria-hidden="true">📝 </span>
        Skills
      </Link>
      <Link className="menu-a" to='education' tabIndex={tabIndex}>
        <span aria-hidden="true">🧑‍🎓 </span>
        Education
      </Link>
      <Link className="menu-a" to='experience'tabIndex={tabIndex}>
        <span aria-hidden="true">🧑‍💻 </span>
        Experience
      </Link>
      <Link className="menu-a" to='contactme' tabIndex={tabIndex}>
        <span aria-hidden="true">📩 </span>
        Contact Me
      </Link>
      <hr />
      <GatsbyLink className="menu-a" to='/blog' tabIndex={tabIndex}>
        <span aria-hidden="true">📰 </span>
        Blog
      </GatsbyLink>
    </nav>
  );
};

export default Menu;
