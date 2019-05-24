import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Route exact path="/" component={Inicio} />  
        <Route exact path="/terapia" component={Servicios} />      
        <Route exact path="/preguntasfrecuentes" component={Nosotros} />      
        <Route exact path="/contacto" component={Contacto} />
        <Footer /> 
     </Router>
    );
  }
}

export default App;
