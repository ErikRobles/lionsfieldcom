import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron6 from '../components/Jumbotron6';
import './ELearning.css';


class ELearning extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron6 />
            <div className="wrapper">
                <div className="container pt-4 pb-4">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 pt-5">
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i className="fas fa-desktop fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">LMS</h2>
                                <div className="content pb-2"><strong><span>Administre, documente y reporte los avances de sus cursos de capacitación</span></strong></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i className="far fa-user fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Interactivo</h2>
                                <div className="content pb-2"><strong><span>Interacción en tiempo real con los miembros de su equipo, en cualquier lugar y en cualquier momento</span></strong></div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-6 col-md-12 pt-1 second-col">
                    <div className="row">
                            <div className="col-2 second-col-inner">
                                <i className="float-left fas fa-money-bill-wave-alt fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Efectivo</h2>
                                <div className="content pb-2"><strong><span>Disminuya costos de capacitación y mejore los resultados</span></strong></div>
                            </div>
                        </div> 
                        <div className="row last-in-line">
                            <div className="col-2 second-col-inner">
                                <i className="float-left fas fa-thumbs-up fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Sencillo</h2>
                                <div className="content pb-2"><strong><span>Accesible para cualquier administrador y todo tipo de usuarios</span></strong></div>
                            </div>
                        </div> 
                    </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-5 pb-5 tidy">
                <h2 className="innnovate">Gestion</h2>
                <p className="experiences">Avance al siguiente nivel y administre de la mejor manera sus recursos de capacitación.</p>
                <div className="button-holder">
                    <Link to='/Contacto' className="btn btn-primary text-uppercase" role="button">Contáctenos</Link>
               </div>
            </div>
            <div className="content-container text-center mb-2 pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-3 col-md-6 spacing">
                        <Link to='/TotalMultimedia' className="blue-links">Multimedia</Link>
                    </div>
                    <div className="col-lg-3 col-md-6 spacing">
                    <Link to='/Gamification' className="blue-links">Gamification</Link>
                    </div>
                    <div className="col-lg-3 col-md-6 spacing">
                    <Link to='/ELearning' className="blue-links">Platform</Link>
                    </div>
                    <div className="col-lg-3 col-md-6 spacing">
                    <Link to='/AbsoluteEngagement' className="blue-links">Absolute Program</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
       );
    }
}

export default ELearning