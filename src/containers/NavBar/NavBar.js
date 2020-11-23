import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from './HTB_Final_LogoMark_1x1.png';

class NavBar extends React.Component {
  render() {
    return (
      <nav className='navbar'>

        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='pod-logo' width='20%' />
          </Link>
        </div>

        <ul>
          <Link to='/episodes'>
            <li>episodes</li>
          </Link>

          <Link to='/resources'>
            <li>resources
              <ul className='dropdown'>
                <li>our story</li>
                <li>submissions</li>
                <li>shop</li>
              </ul>
            </li>
          </Link>

          <Link to='/sitwithus'>
            <li>sit with us</li>
          </Link>
        </ul>

      </nav>
    );
  };
};

export default NavBar;
