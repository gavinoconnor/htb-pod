import React from 'react';

import './BackgroundImage.css';
import backgroundGraphic from './HTB_FullArt_Final_1x1.png';

class BackgroundImage extends React.Component {
  render() {
    return (
      <div className='BackgroundImage'>
        <img src={backgroundGraphic} alt=''/>
      </div>
    )
  }
}

export default BackgroundImage;
