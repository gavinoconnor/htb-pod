import React from 'react';

import './Home.css';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import founderPhoto from './image0.jpeg';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='topline'>
          <p>two moms. two kids. too many reasons to give two shits.</p>
        </div>
        <BackgroundImage className='bg-image'/>
        <img src={founderPhoto} alt='' style={{borderRadius: '50%', width: '30%', position: 'absolute', top: '400px', left: '500px'}}/>
        <div className='bottomline'>
          <p>shake your beverages. not your babies.</p>
        </div>
      </div>
    )
  }
}

export default Home;
