import React, { Component } from 'react';
import './Inicio.css';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Jumbotron1 from '../components/Jumbotron1';
import Footer from '../components/Footer';

import OwlCarousel1 from '../components/OwlCarousel1';


class Inicio extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron1 />
            <div className="content-container mt-1 pt-5 pb-5">
                <div className="content-img-1">
                    <div className="image-inner">    
                        <div className="caption-background">
                            <div className="caption caption text-center pt-1 text-uppercase">1. Total Multimedia</div>
                            <div className="sub-caption text-center pb-1">
                                <h3>Realizamos sus tutoriales, videos, descargables y más, la mejor experiencia en capacitación</h3>
                            </div>
                            <div className="button-holder">
                                <Link to='/TotalMultimedia' className="btn btn-primary text-uppercase" role="button">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-container pt-2 pb-2">
                <div className="content-img-2">
                    <div className="image-inner">    
                        <div className="caption-background">
                            <div className="caption caption text-center pt-1 text-uppercase">2. Gamification Projects</div>
                            <div className="sub-caption text-center pb-1">
                                <h3>Desarrollamos el potencial de cada persona con juegos, aplicaciones y más, las herramientas más innovadoras en capacitación</h3>
                            </div>
                            <div className="button-holder">
                                <Link to='/Gamification' className="btn btn-primary text-uppercase" role="button">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-container pt-5 pb-2">
                <div className="content-img-3">
                    <div className="image-inner">    
                        <div className="caption-background">
                            <div className="caption caption text-center pt-1 text-uppercase">3. Full E-Learning Platform</div>
                            <div className="sub-caption text-center pb-1">
                                <h3>Creamos una plataforma para todos sus materiales de formación, totalmente interactivos y atractivos</h3>
                            </div>
                            <div className="button-holder">
                                <Link to='/ELearning' className="btn btn-primary text-uppercase" role="button">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-container mb-2 pt-5">
                <div className="content-img-4">
                    <div className="image-inner">    
                        <div className="caption-background">
                            <div className="caption caption text-center pt-1 text-uppercase">4. ABSOLUTE ENGAGEMENT PROGRAM</div>
                            <div className="sub-caption text-center pb-1">
                                <h3>El poder de todas nuestras soluciones en un solo programa incomparable</h3>
                            </div>
                            <div className="button-holder">
                                <Link to='/AbsoluteEngagement' className="btn btn-primary text-uppercase" role="button">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>
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
            <OwlCarousel1 />
            <Footer />
        </div>
       );
    }
}

export default Inicio