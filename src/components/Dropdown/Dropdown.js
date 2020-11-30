import React from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';

class Dropdown extends React.Component {
    render() {
        return (
          <ul className='dropdown'>
          <li>spill the whine</li>
            <Link to='/newsletter'>
              <li>newsletter</li>
            </Link>
            <Link to='/submissions'>
              <li>submissions</li>
            </Link>
          </ul>
        )
    };
};

export default Dropdown;