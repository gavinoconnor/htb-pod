import React from 'react';

import './Home.css';

// import images
import cheers from '../../assets/Cheers_final.png';

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
      </div>
    )
  }
}

export default Home;
