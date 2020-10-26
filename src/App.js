import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from '../src/components/Home/Home';
import Episodes from '../src/components/Episodes/Episodes';
import Submissions from '../src/components/Submissions/Submissions';
import SitWithUs from '../src/containers/SitWithUs/SitWithUs';
import Resources from '../src/components/Resources/Resources';
import Shop from '../src/components/Shop/Shop';


import NavBar from './containers/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/episodes' component={Episodes}/>
            <Route path='/submissions' component={Submissions}/>
            <Route path='/sitwithus' component={SitWithUs}/>
            <Route path='/resources' component={Resources}/>
            <Route path='/shop' component={Shop}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
