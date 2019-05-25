import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-wrapper">
            <nav className="navbar nav-container pb-3 navbar-expand-md navbar-dark overlay">
            <a className="navbar-brand" href="/"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link text-uppercase" href="/">Inicio <span className="sr-only">(current)</span></a>
                    </li><li className="nav-item dropdown">
                    <a className="nav-link text-uppercase dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                        <a className="dropdown-item text-uppercase font-weight-bold" href="/Gamification">Gamification Projects</a>
                        <a className="dropdown-item text-uppercase font-weight-bold" href="/TotalMultimedia">Total Multimedia</a>
                        <a className="dropdown-item text-uppercase font-weight-bold" href="/ELearning">Full E-Learning Platform</a>
                        <a className="dropdown-item text-uppercase font-weight-bold" href="/AbsoluteEngagement">Absolute Engagement Program</a>
                    </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-uppercase" href="/Nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-uppercase" href="/Contacto">Contacto</a>
                    </li>
                    
                </ul>
                </div>
            </nav> 
            </div>
        );
    }
}

export default Navbar