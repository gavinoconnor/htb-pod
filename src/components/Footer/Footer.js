import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <ul>
          <li>© 2020 Hitting the Bottle</li>
          <li><a href='mailto:hello@hittingthebottle.com'>hello@hittingthebottlepod.com</a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
