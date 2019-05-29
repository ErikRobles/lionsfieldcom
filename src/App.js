import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


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
        <Route exact path='/' component={Inicio} />
        <Route exact path='/Gamification' component={Gamification} />
        <Route exact path='/TotalMultimedia' component={TotalMultimedia} />
        <Route exact path='/ELearning' component={ELearning} />
        <Route exact path='/AbsoluteEngagement' component={AbsoluteEngagement} />
        <Route exact path='/Nosotros' component={Nosotros} />
        <Route exact path='/Contacto' component={Contacto} />
        </div>
      </Router>
    );
  }
}


export default App;
