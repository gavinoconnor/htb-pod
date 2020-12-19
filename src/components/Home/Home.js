import React from 'react';

import './Home.css';

// import images
import cheers from '../../assets/Cheers_final.png';
import appleButton from '../../assets/US_UK_Apple_Podcasts_Listen_Badge_RGB.png';
import googleButton from '../../assets/EN_Google_Podcasts_Badge_2x.png';

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <div className='topline'>
          <p>two moms. two kids.<br />too many reasons to give two shits.</p>
        </div>

        <img src={cheers} alt='' className='cheers-photo' />

        <div className='bottomline'>
          <p>shake your beverages. not your babies.</p>
        </div>
        <div className='pod-buttons'>
          {/* <img src={appleButton} alt='' className='apple-button' /> */}
          <a href='https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vaGl0dGluZ3RoZWJvdHRsZQ%3D%3D'>
            <img src={googleButton} alt='' className='google-button' style={{ width: '200px' }} />
          </a>
          <a href='https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vaGl0dGluZ3RoZWJvdHRsZQ%3D%3D'>
            <img src={appleButton} alt='' className='apple-button' style={{ width: '200px' }} />
          </a>
        </div>
      </div>
    )
  }
}

export default Home;
