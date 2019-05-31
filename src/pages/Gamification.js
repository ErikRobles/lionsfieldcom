import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Jumbotron4 from '../components/Jumbotron4';
import Footer from '../components/Footer';
import './Gamification.css';



class Gamification extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron4 />
            <div className="wrapper">
                <div className="container pt-4 pb-4">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 pt-5">
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="fa fa-star fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Videojuegos</h2>
                                <div className="content pb-2"><strong><span>Acceda a nuevas plataformas para cumplir con sus objetivos de capacitación</span></strong></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 second-col-inner">
                            <i class="fas fa-mobile-alt fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Aplicaciones</h2>
                                <div className="content pb-2"><strong><span>Acceda a nuevas plataformas para cumplir con sus objetivos de capacitación</span></strong></div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-6 col-md-12 pt-1 second-col">
                    <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="float-left fa fa-globe fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Competencias en tiempo real</h2>
                                <div className="content pb-2"><strong><span>Siga el avance de su equipo de forma divertida y profesional</span></strong></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="float-left fa fa-image fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Realidad Virtual</h2>
                                <div className="content pb-2"><strong><span>Elimine fronteras, incremente niveles de comprensión y retención en la capacitación</span></strong></div>
                            </div>
                        </div> 
                    </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-5 pb-5">
                <h2 className="innnovate">Innovación</h2>
                <p className="experiences">Experiencias que te llevan más allá</p>
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

export default Gamification