import React from 'react';

import OurStory from '../../components/OurStory/OurStory';
// import Contact from '../../components/Contact/Contact';

import './SitWithUs.css';

class SitWithUs extends React.Component {
  render() {
    return (
      <div className='sitwithus'>
        <h1>Sit With Us</h1>
        <OurStory />
      </div>
    )
  }
}

export default SitWithUs;
