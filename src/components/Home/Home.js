import React from 'react';

import './Home.css';
import backgroundImage from './HTB_Final_Girls_1x1.png';
import founderPhoto from './Cheers_photo.png';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <img src={backgroundImage} alt='' className='bg-image' />
        <div className='topline'>
          <p>two moms. two kids. <br />too many reasons to give two shits.</p>
        </div>
        <img src={founderPhoto} alt='' className='founder-photo' />
        <div className='bottomline'>
          <p>shake your beverages. not your babies.</p>
        </div>
      </div>
    )
  }
}

export default Home;
