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
      <Router basename="/"> 
        <div>
        <Route path={process.env.PUBLIC_URL + '/'} component={Inicio} />
        <Route path={process.env.PUBLIC_URL + '/Gamification'} component={Gamification} />
        <Route path={process.env.PUBLIC_URL + '/TotalMultimedia'} component={TotalMultimedia} />
        <Route path={process.env.PUBLIC_URL + '/ELearning'} component={ELearning} />
        <Route path={process.env.PUBLIC_URL + '/AbsoluteEngagement'} component={AbsoluteEngagement} />
        <Route path={process.env.PUBLIC_URL + '/Nosotros'} component={Nosotros} />
        <Route path={process.env.PUBLIC_URL + '/Contacto'} component={Contacto} />
        </div>
      </Router>
    );
  }
}

export default App;
