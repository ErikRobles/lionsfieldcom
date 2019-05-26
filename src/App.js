import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Gamification from './pages/Gamification';
import TotalMultimedia from './pages/TotalMultimedia';
import ELearning from './pages/ELearning';
import AbsoluteEngagement from './pages/AbsoluteEngagement';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';


class App extends Component {
  render() {
    return (
      <Router basename="lionsfieldcom"> 
        <div>
        <Route exact path='/lionsfieldcom/' component={Inicio} />
        <Route exact path='/lionsfieldcom/Gamification' component={Gamification} />
        <Route exact path='/lionsfieldcom/TotalMultimedia' component={TotalMultimedia} />
        <Route exact path='/lionsfieldcom/ELearning' component={ELearning} />
        <Route exact path='/lionsfieldcom/AbsoluteEngagement' component={AbsoluteEngagement} />
        <Route exact path='/lionsfieldcom/Nosotros' component={Nosotros} />
        <Route exact path='/lionsfieldcom/Contacto' component={Contacto} />
        </div>
      </Router>
    );
  }
}

export default App;
