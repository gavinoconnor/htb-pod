import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../../components/Dropdown/Dropdown';
import '../../components/Dropdown/Dropdown.css';

import './NavBar.css';
import Logo from './HTB_Final_LogoMark_1x1.png';

class NavBar extends React.Component {

  state = {
    isHovering: false
  }

  handleHover = () => {
   this.setState({
     isHovering: !this.state.isHovering
    });
  }

  render() {
    return (
      <nav className='navbar'>

        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='pod-logo' width='20%' />
          </Link>
        </div>

        <ul className='nav-links'>
          <Link to='/episodes'>
            <li>episodes</li>
          </Link> 

          <Link to='/#'>
          {
            !this.state.isHovering ? (
              <li onMouseEnter={this.handleHover}>resources</li>  
            ) : 
            <Dropdown />
          }
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
