import React from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';

class Dropdown extends React.Component {
    render() {
        return (
          <ul className='dropdown'>
            <Link to='/#'>
              <li>newsletter</li>
            </Link>
            <Link to='/#'>
              <li>submissions</li>
            </Link>
            <Link to='/#'>
              <li>shop</li>
            </Link>
          </ul>
        )
    };
};

export default Dropdown;