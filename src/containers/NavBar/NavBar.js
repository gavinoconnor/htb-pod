import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../../components/Dropdown/Dropdown';
import '../../components/Dropdown/Dropdown.css';

import './NavBar.css';
import Logo from './HTB_Final_LogoMark_1x1.png';

class NavBar extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
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
          <li>  
            <Link to='/episodes'>episodes</Link> 
          </li>
        
          <li onClick={this.handleClick}>
            {!this.state.isHovering ? <Link to='/#'>resources</Link>  : <Dropdown />}  
          </li>
                  
          <li>  
            <Link to='/sitwithus'>sit with us</Link> 
          </li>
        </ul>

      </nav>
    );
  };
};

export default NavBar;
