import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from './HTB_Final_LogoMark_1x1.png';

class NavBar extends React.Component {
  render() {
    return (
      <nav className='NavBar'>
        <div className='Logo'>
          <Link to='/'>
          <img src={Logo} alt='pod-logo' width='20%'/>
          </Link>
        </div>
        <ul>
          <Link to='/episodes'>
            <li>episodes</li>
          </Link>
          {/* <Link to='/submissions'>
            <li>Submissions</li>
          </Link> */}
          <Link to='/resources'>
          <li>resources</li>
        </Link>
          <Link to='/sitwithus'>
            <li>sit with us</li>
          </Link>
          {/* <Link to='/shop'>
            <li>Shop</li>
          </Link> */}
        </ul>
      </nav>
    );
  };
};

export default NavBar;
