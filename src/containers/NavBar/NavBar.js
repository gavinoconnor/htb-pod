import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../../components/Dropdown/Dropdown';
// import '../../components/Dropdown/Dropdown.css';

import './NavBar.css';

import Logo from './HTB_Final_LogoMark_1x1.png';

class NavBar extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
   this.setState({
     clicked: !this.state.clicked
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
            {!this.state.clicked ? <Link to='/#'>spill the whine</Link>  : <Dropdown />}  
          </li>
                  
          <li>  
            <Link to='/sitwithus'>sit with us</Link> 
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
