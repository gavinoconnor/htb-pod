import React from 'react';
import './NavBar.css';
import Logo from './HTB_Final_LogoMark_1x1.png';

class NavBar extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <div className='Logo'>
          <img src={Logo} alt='pod-logo' width='10%'/>
        </div>
        <ul>
          <li><a href='#home'>Episodes</a></li>
          <li><a href='#submissions'>Submissions</a></li>
          <li><a href='#sitwithus'>Sit with Us</a></li>
          <li><a href='#resources'>Resources</a></li>
          <li><a href='#shop'>Shop</a></li>
        </ul>
      </div>
    );
  };
};

export default NavBar;
