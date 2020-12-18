import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';

import Home from '../src/components/Home/Home';
import Episodes from '../src/components/Episodes/Episodes';
import SpillTheWhine from '../src/components/SpillTheWhine/SpillTheWhine';
import Patreon from '../src/components/Patreon/Patreon';
import SitWithUs from '../src/components/SitWithUs/SitWithUs';
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
            <Route path='/sitwithus' component={SitWithUs}/>
            <Route path='/patreon' component={Patreon}/>
            <Route path='/resources' component={Resources}/>
            <Route path='/merch' component={Merch}/>
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
