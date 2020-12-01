import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from '../src/components/Home/Home';
import Episodes from '../src/components/Episodes/Episodes';
import SpillTheWhine from '../src/containers/SpillTheWhine/SpillTheWhine';
import Submissions from '../src/components/Submissions/Submissions';
import Newsletter from '../src/components/Newsletter/Newsletter';
import SitWithUs from '../src/containers/SitWithUs/SitWithUs';
import Merch from '../src/components/Merch/Merch';
import Resources from '../src/components/Resources/Resources';


import NavBar from './containers/NavBar/NavBar';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/episodes' component={Episodes}/>
            <Route path='/spillthewhine' component={SpillTheWhine}/>
            <Route path='/submissions' component={Submissions}/>
            <Route path='/newsletter' component={Newsletter}/>
            <Route path='/sitwithus' component={SitWithUs}/>
            <Route path='/merch' component={Merch}/>
            <Route path='/resources' component={Resources}/>
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
