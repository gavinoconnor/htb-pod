import React from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';

class Dropdown extends React.Component {
    render() {
        return (
          <React.Fragment>
          <li>spill the whine</li>
          <ul className='dropdown'>
            <li className='drop-item'>  
              <Link to='/newsletter'>newsletter</Link> 
            </li>
            <li className='drop-item'>  
              <Link to='/submissions'>submissions</Link> 
            </li>
          </ul>
          </React.Fragment>
        )
    };
};

export default Dropdown;