import React from 'react';
import './App.css';

import NavBar from './containers/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <h3>(Sit With Us): Our Story | Contact | Newsletter | Follow Us | Patreon</h3> */}
        <h1>Hitting the Bottle</h1>
        <div>Founder Photo / Mission Statement</div>

      </div>
    );
  }
}

export default App;
