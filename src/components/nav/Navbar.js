import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';

export default class CustomNavbar extends Component {
  render() {
    return (
        <Navbar expand="lg">
        <Navbar.Header>
            <Navbar.Brand>
                <NavLink to="/">
                    <Image src={Logo} fluid />
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />          
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">
                    <NavItem>Viaje Interior</NavItem>
                </NavLink>
                <NavLink exact to="/Terapia" className="main-nav" activeClassName="main-nav-active">
                    <NavItem>Terapia</NavItem>
                </NavLink>
                <NavLink exact to="/PreguntasFrecuentes" className="main-nav" activeClassName="main-nav-active">
                    <NavItem>Pretguntas Frecuentes</NavItem>
                </NavLink>
                <NavLink exact to="/Contacto" className="main-nav" activeClassName="main-nav-active">
                    <NavItem>Contacto</NavItem>
                </NavLink>  
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}



