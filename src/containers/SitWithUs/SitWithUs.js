import React from 'react';

import OurStory from '../../components/OurStory/OurStory';
import Contact from '../../components/Contact/Contact';

import './SitWithUs.css';

class SitWithUs extends React.Component {
  render() {
    return (
      <div className='SitWithUs'>
        <h1>Sit With Us</h1>
        <OurStory />
        <Contact />
      </div>
    )
  }
}

export default SitWithUs;
