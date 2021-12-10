import React from 'react';
import './Menu.css';
import { Link } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';
import Fade from 'react-reveal/Fade';

const Menu = ({ open, setOpen, ...props }) => {
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
        padding: '3rem',
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
      <Fade top when={open}>
        <div
          className="circle1"
          style={{
            zIndex: '-1',
            top: '50px',
            background: 'rgba(90, 24, 154, 0.4)',
          }}
        />
        <div
          className="circle6"
          style={{ zIndex: '-1', background: 'rgba(123, 44, 191,0.4)' }}
        />
        <div
          className="circle5"
          style={{
            zIndex: '-1',
            top: '120px',
            left: '50px',
            background: 'rgba(123, 44, 191, 0.4)',
          }}
        />
        <div
          className="circle7"
          style={{
            zIndex: '-1',
            background: 'rgba(157, 78, 221, 0.4)',
            left: '30px',
            bottom: '0',
          }}
        />
      </Fade>
      <Link
        className="menu-a"
        to="aboutme"
        tabIndex={tabIndex}
        smooth={true}
        offset={-50}
        onClick={() => {
          setOpen(false);
        }}
      >
        <span aria-hidden="true">💁🏻‍♂️ </span>
        About Me
      </Link>
      <Link
        className="menu-a"
        to="projects"
        tabIndex={tabIndex}
        smooth={true}
        offset={-500}
        onClick={() => {
          setOpen(false);
        }}
      >
        <span aria-hidden="true">💸 </span>
        Projects
      </Link>
      <Link
        className="menu-a"
        to="skills"
        tabIndex={tabIndex}
        smooth={true}
        offset={-50}
        onClick={() => {
          setOpen(false);
        }}
      >
        <span aria-hidden="true">📝 </span>
        Skills
      </Link>
      <Link
        className="menu-a"
        to="education"
        tabIndex={tabIndex}
        smooth={true}
        offset={-50}
        onClick={() => {
          setOpen(false);
        }}
      >
        <span aria-hidden="true">🧑‍🎓 </span>
        Education
      </Link>
      <Link
        className="menu-a"
        to="experience"
        tabIndex={tabIndex}
        smooth={true}
        offset={-100}
        onClick={() => {
          setOpen(false);
        }}
      >
        <span aria-hidden="true">🧑‍💻 </span>
        Experience
      </Link>
      <Link
        className="menu-a"
        to="contactme"
        tabIndex={tabIndex}
        smooth={true}
        offset={-100}
        onClick={() => {
          setOpen(false);
        }}
      >
        <span aria-hidden="true">📩 </span>
        Contact Me
      </Link>
      <hr />
      <GatsbyLink
        className="menu-a"
        to="/blog"
        tabIndex={tabIndex}
        smooth='true'
      >
        <span aria-hidden="true">📰 </span>
        Blog
      </GatsbyLink>
    </nav>
  );
};

export default Menu;
