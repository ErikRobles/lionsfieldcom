import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const isActivefunc = (match, location) => {
    return match
}

class Navbar extends Component {
    render() {
        return (
            <div className="nav-wrapper">
            <nav className="navbar nav-container pb-3 navbar-expand-md navbar-dark overlay">
            <NavLink to="/"className="navbar-brand"></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <NavLink  
                        isActive={isActivefunc} 
                        exact activeClassName="active"
                        className="nav-link text-uppercase"
                        to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink exact to="/Servicios" activeClassName="active" className="nav-link text-uppercase dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios</NavLink>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                        <NavLink exact to="/Gamification" activeClassName="main-nav-active-dropdown" className="dropdown-item text-uppercase font-weight-bold">Gamification Projects</NavLink>
                        <NavLink exact to="/TotalMultimedia" activeClassName="main-nav-active-dropdown" className="dropdown-item text-uppercase font-weight-bold">Total Multimedia</NavLink>
                        <NavLink exact to="/ELearning" activeClassName="main-nav-active-dropdown" className="dropdown-item text-uppercase font-weight-bold">Full E-Learning Platform</NavLink>
                        <NavLink exact to="/AbsoluteEngagement" activeClassName="main-nav-active-dropdown" className="dropdown-item text-uppercase font-weight-bold">Absolute Engagement Program</NavLink>
                    </div>
                    </li>
                    <li className="nav-item">
                    <NavLink exact to="/Nosotros" activeClassName="active" className="nav-link text-uppercase">Nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact to="/Contacto" activeClassName="active" className="nav-link text-uppercase">Contacto</NavLink>
                    </li>
                    
                </ul>
                </div>
            </nav> 
            </div>
        );
    }
}

export default Navbar