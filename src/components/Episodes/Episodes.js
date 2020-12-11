import React from 'react';

import './Episodes.css';

class Episodes extends React.Component {
  render() {
    return (
      <div className='episodes'>
        <h1>Episodes</h1>
        <div className='pod-player'>
          <iframe title='Latest Episode'
            style={{ width: '100%', height: '600px' }}
            frameborder="no"
            scrolling="no"
            seamless
            src="https://player.captivate.fm/show/00dd4d8f-76c7-4960-850b-2a73acfed083/">
          </iframe>
        </div>
      </div>
    )
  }
}

export default Episodes;
