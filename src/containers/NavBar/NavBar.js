import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import Logo from '../../assets/HTB_Final_Logo_1x1.png';

class NavBar extends React.Component {

  render() {
    return (
      <nav className='navbar'>

        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='pod-logo'/>
          </Link>
        </div>

        <ul className='nav-links'>
          <li>  
            <Link to='/episodes'>episodes</Link> 
          </li>
        
          <li>
            <Link to='/spillthewhine'>spill the whine</Link> 
          </li>
                  
          <li>  
            <Link to='/sitwithus'>sit with us</Link> 
          </li>

          <li>  
            <Link to='/patreon'>patreon</Link> 
          </li>

          <li>  
            <Link to='/resources'>resources</Link> 
          </li>

        <li>  
          <Link to='/merch'>merch</Link> 
        </li>
        </ul>

      </nav>
    );
  };
};

export default NavBar;
