import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation = () => (
  <header className="navbar bg-secondary">
    <ul className="flex justify-between container">
      <li>
        <NavLink to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Covid-19 Tracker</NavLink>
      </li>
      <li>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </li>
    </ul>
  </header>
);

export default Navigation;
