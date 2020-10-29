import React from 'react';

import './Home.css';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='topline'>
          <p>two moms. two kids. too many reasons to give two shits.</p>
        </div>
        <BackgroundImage />
        <div className='bottomline'>
          <p>shake your beverages. not your babies.</p>
        </div>
      </div>
    )
  }
}

export default Home;
