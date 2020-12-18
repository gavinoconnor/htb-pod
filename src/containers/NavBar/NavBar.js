import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';
import Logo from '../../assets/HTB_Final_Logo_1x1.png';

class NavBar extends React.Component {

  render() {
    return (
      <nav className='navbar'>

        <div className='logo'>
          <NavLink to='/'>
            <img src={Logo} alt='pod-logo' />
          </NavLink>
        </div>

        <ul className='nav-links'>
          <li>
            <NavLink
              to='/episodes'
              activeStyle={{ fontWeight: 'bold' }}>episodes</NavLink>
          </li>

          <li>
            <NavLink
              to='/spillthewhine'
              activeStyle={{ fontWeight: 'bold' }}>spill the whine</NavLink>
          </li>

          <li>
            <NavLink
              to='/sitwithus'
              activeStyle={{ fontWeight: 'bold' }}>sit with us</NavLink>
          </li>

          <li>
            <NavLink
              to='/patreon'
              activeStyle={{ fontWeight: 'bold' }}>patreon</NavLink>
          </li>

          <li>
            <NavLink
              to='/resources'
              activeStyle={{ fontWeight: 'bold' }}>resources</NavLink>
          </li>

          <li>
            <NavLink
              to='/merch'
              activeStyle={{ fontWeight: 'bold' }}>merch</NavLink>
          </li>
        </ul>

      </nav>
    );
  };
};

export default NavBar;
