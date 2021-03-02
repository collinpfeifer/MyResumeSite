/* eslint-disable max-len */
import React, {useState} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
// import {faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';
// import {faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
// import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
// import {faCube} from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

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
      <div id='offcanvas-usage' data-uk-offcanvas='mode:reveal; overlay:true;'>
        <div className='uk-offcanvas-bar'>
          <div className='navbarmain'>
            <ul className='navbar-ul'>
              <li className='navbar-li'>
                {/* <FontAwesomeIcon icon={faAddressCard} className='icon' /> */}
                <a href='#' className='navbar-a'>
                  About Me
                </a>
              </li>
              <li className={isActive} className='navbar-li'>
                {/* <FontAwesomeIcon icon={faPhoneSquareAlt} className='icon' /> */}
                <a href='#' className='navbar-a'>
                  Contact Me
                </a>
              </li>
              <li className={isActive} className='navbar-li'>
                {/* <FontAwesomeIcon icon={faProjectDiagram} className='icon' /> */}
                <a href='#' className='navbar-a'>
                  Projects
                </a>
              </li>
              <li className={isActive} className='navbar-li'>
                {/* <FontAwesomeIcon icon={faBriefcase} className='icon' /> */}
                <a href='#' className='navbar-a'>
                  Experience
                </a>
              </li>
              <li className={isActive} className='navbar-li'>
                {/* <FontAwesomeIcon icon={faCube} className='icon' /> */}
                <a href='#' className='navbar-a'>
                  Future
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
