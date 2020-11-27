import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from '../src/components/Home/Home';
import Episodes from '../src/components/Episodes/Episodes';
import Submissions from '../src/components/Submissions/Submissions';
import SitWithUs from '../src/containers/SitWithUs/SitWithUs';
import Newsletter from '../src/components/Newsletter/Newsletter';
import Shop from '../src/components/Shop/Shop';


import NavBar from './containers/NavBar/NavBar';
import Footer from './components/Footer/Footer';

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
            <Route path='/newsletter' component={Newsletter}/>
            <Route path='/shop' component={Shop}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
