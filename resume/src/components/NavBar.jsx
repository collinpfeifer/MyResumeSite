import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faCube} from '@fortawesome/free-solid-svg-icons';
import '../css/NavBar.scss';

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(false);

  /* const toggleActive = () => {
    setActive(!active);
  } */

  const isActive = active ? 'active' : '';
  return (
    <>
      <i
        className='button fas fa-bars'
        data-uk-toggle='target: #offcanvas-usage'
      />

      <div id='offcanvas-usage' data-uk-offcanvas='overlay:true'>
        <div className='uk-offcanvas-bar'>
          <ul>
            <li className='active'>
              <FontAwesomeIcon icon={faAddressCard} className='icon' />
              <a href='#'>About Me</a>
            </li>
            <li className={isActive}>
              <FontAwesomeIcon icon={faPhoneSquareAlt} className='icon' />
              <a href='#'>Contact Me</a>
            </li>
            <li className={isActive}>
              <FontAwesomeIcon icon={faProjectDiagram} className='icon' />
              <a href='#'>Projects</a>
            </li>
            <li className={isActive}>
              <FontAwesomeIcon icon={faBriefcase} className='icon' />
              <a href='#'>Experience</a>
            </li>
            <li className={isActive}>
              <FontAwesomeIcon icon={faCube} className='icon' />
              <a href='#'>Future</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
