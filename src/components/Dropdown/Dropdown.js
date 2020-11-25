import React from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';

class Dropdown extends React.Component {
    render() {
        return (
          <ul className='dropdown'>
          <li>resources</li>
            <Link to='/newsletter'>
              <li>newsletter</li>
            </Link>
            <Link to='/submissions'>
              <li>submissions</li>
            </Link>
            <Link to='/shop'>
              <li>shop</li>
            </Link>
          </ul>
        )
    };
};

export default Dropdown;