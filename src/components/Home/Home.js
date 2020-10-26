import React from 'react';

import './Home.css';
import founderPhoto from './image0.jpeg';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='about'>
          <h3>Two Moms. Two Kids. Too many reasons to give two shits.</h3>
          <br />
          <img src={founderPhoto} alt='' width='50%'></img>
          <h3>Alysia and Sarah share a love of motherhood, cocktails, and sitting down for some real talk. They created the Hitting the Bottle Podcast for parents who need to be reminded they aren’t alone with their thoughts.
          <br />
          <br />Sometimes it’s hard to talk about the darkness that comes with maternity leave, or the fact that you actually don’t want to spend every waking second with your child. We all experience different forms of happiness, sadness and anxiety - so you don’t have to be a parent to listen and join in on the conversation. BUT we will be talking about vaginas a lot. Because those things are the gateway to mother fucking creation! We love you ALL. </h3>
      </div>
      </div>
    )
  }
}

export default Home;
