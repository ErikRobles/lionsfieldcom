import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron7 from '../components/Jumbotron7';

import './AbsoluteEngagement.css';


class AbsoluteEngagement extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron7 />
            <div className="wrapper">
              <div className="engage-container pt-4 pb-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 pt-5">
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="fas fa-fire fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3 p-2">Total Multimedia</h2>
                                <div className="content p-2"><strong><span>Tutoriales, videos, descargables y más, para una mejor capacitación</span></strong></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 pt-1 second-col">
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="far fa-paper-plane fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3 p-2">Gamification Projects</h2>
                                <div className="content p-2"><strong><span>Insólito, funcional y más divertido</span></strong></div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-12 pt-1 second-col">
                        <div className="row">
                            <div className="col-2 second-col-inner">
                                <i class="float-left far fa-calendar-alt fa-2x circle-icon"></i>
                            </div>
                            <div className="col-10">
                            <h2 className="title pt-3 p-2">Efectivo</h2>
                                <div className="content p-2"><strong><span>Disminuya costos de capacitación y mejore los resultados</span></strong></div>
                            </div>
                        </div> 
                    </div>
                  </div>
              </div>
            </div>
            <div className="text-center pt-5 pb-5 tidy">
                <h2 className="innnovate">Engagement</h2>
                <p className="experiences">Elija el medio, la dinámica y la herramienta, mejore el contenido de sus proyectos de capacitación.</p>
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

export default AbsoluteEngagement