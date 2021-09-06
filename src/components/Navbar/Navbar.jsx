/* eslint-disable max-len */
// cant use modules for this one
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './Navbar.scss';

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <i
        className="button fas fa-bars"
        data-uk-toggle="target: #offcanvas-usage"
      />
      <div id="offcanvas-usage" data-uk-offcanvas="overlay:true;">
        <div className="uk-offcanvas-bar">
          <div className="navbarmain">
            <ul className="navbar-ul">
              <li className="navbar-li">
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                <Link to="aboutme" className="navbar-a">
                  About Me
                </Link>
              </li>
              <li className="navbar-li">
                <FontAwesomeIcon icon={faCube} className="icon" />
                <Link to="projects" className="navbar-a">
                  Projects
                </Link>
              </li>
              <li className="navbar-li">
                <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
                <Link to="skills" className="navbar-a">
                  Skills
                </Link>
              </li>
              <li className="navbar-li">
                <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                <Link to="education" className="navbar-a">
                  Education
                </Link>
              </li>
              <li className="navbar-li">
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                <Link to="experience" className="navbar-a">
                  Experience
                </Link>
              </li>
              <li className="navbar-li">
                <FontAwesomeIcon icon={faPhoneSquareAlt} className="icon" />
                <Link to="contactme" className="navbar-a">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
