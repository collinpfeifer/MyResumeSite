import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faCube} from '@fortawesome/free-solid-svg-icons';
import {Grid} from '@material-ui/core';
import '../css/Navbar.css';


const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <Grid container
      justify="left"
      spacing={0}
      direction="column"
      className="nav"
      expanded={isCollapsed}
      onToggle={handleCollapse}>
      <div className="card">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faAddressCard} className='icon'
            /><a href="#">About Me</a></li>
          <li>
            <FontAwesomeIcon
              icon={faPhoneSquareAlt} className='icon'
            /><a href="#">Contact Me</a></li>
          <li>
            <FontAwesomeIcon
              icon={faProjectDiagram} className='icon'
            /><a href="#">Projects</a></li>
          <li>
            <FontAwesomeIcon
              icon={faBriefcase} className='icon'
            /><a href="#">Experience</a></li>
          <li>
            <FontAwesomeIcon
              icon={faCube} className='icon'
            /><a href="#">Future</a></li>
        </ul>
      </div>
    </Grid>

  );
};

export default NavBar;
