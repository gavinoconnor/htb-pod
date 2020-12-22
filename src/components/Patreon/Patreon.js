import React from 'react';

import './Patreon.css';

import patreonMark from '../../assets/Digital-Patreon-Wordmark_WhiteOnBlack-Sm.jpg';

class Patreon extends React.Component {
  render() {
    return (
      <div className='patreon'>
        <p>
          Signing up for our Patreon gives you early access to episodes, bonus content, special discounts, private community social groups, and more.  Beyond that - it is a huge support that allows us to grow and bring you more amazing content each week! It’s a win-WIN.  Choose your tier (ranging from $5 - $25 / month) and start getting that special treatment today!
        </p>
        <div className='mark'>
          <a href='https://www.patreon.com/hittingthebottle' target='_blank' rel="noopener noreferrer">
          <img src={patreonMark} alt='' className='patreon-mark' /></a>
        </div>
      </div>
    )
  }
}

export default Patreon;