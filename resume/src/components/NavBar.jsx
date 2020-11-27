
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
/**
 * @return {Component} navbar
 */
export default function NavBar() {
  return (
    <div className="Nav">
      <div className = "card">
        <ul>
          <li><FontAwesomeIcon icon= {faAddressCard}/>About Me</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
