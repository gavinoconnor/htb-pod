import React from 'react';
import './NavBar.css';
import Logo from './HTB_Final_LogoMark_1x1.png';

class NavBar extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <container>
          <img src={Logo} alt='pod-logo' width='5%'/>
        </container>
        <ul>
          <li>Episodes</li>
          <li>Submissions</li>
          <li>Sit With Us</li>
          <li>Resources</li>
          <li>Shop</li>
        </ul>
      </div>
    );
  };
};

export default NavBar;
