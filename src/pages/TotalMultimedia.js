import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Jumbotron5 from '../components/Jumbotron5';
import Footer from '../components/Footer';
import './TotalMultimedia.css';


class TotalMultimedia extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron5 />
            <div className="wrapper">
                <div className="container pt-4 pb-4">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 pt-5">
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="fa fa-camera fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Fotografía</h2>
                                <div className="content pb-2"><strong><span>La mejor versión de su imagen empresarial</span></strong></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="far fa-eye fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Diseño</h2>
                                <div className="content pb-2"><strong><span>Sus descargables con diseños profesionales y efectivos</span></strong></div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-6 col-md-12 pt-1 second-col">
                    <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="float-left fas fa-video fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Video</h2>
                                <div className="content pb-2"><strong><span>Siga el avance deTutoriales diseñados de acuerdo a sus necesidades</span></strong></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="float-left fas fa-volume-up fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3">Audio</h2>
                                <div className="content pb-2"><strong><span>Disponga de un recurso clave para cada integrante en la estructura de la organización</span></strong></div>
                            </div>
                        </div> 
                    </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-5 pb-5">
                <h2 className="innnovate">Calidad</h2>
                <p className="experiences">Mejore la experiencia en la capacitación.</p>
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

export default TotalMultimedia