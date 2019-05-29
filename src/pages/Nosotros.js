import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css';

import Navbar from '../components/Navbar';
import Jumbotron2 from '../components/Jumbotron2';
import Footer from '../components/Footer';
import Progress from '../components/Progress';

import OwlCarousel1 from '../components/OwlCarousel1';




class Nosotros extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron2 />
            <div className="container pt-5 pb-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4 className="text-uppercase title-corp">Lionsfield México</h4>
                        <h5 className="quienes-sub-title pt-4">Para llegar a ser</h5>
                        <p className="quienes-body-text pt-4"> En Lionsfield somos un equipo profesional dedicado a la Capacitación Empresarial de Alto Nivel. Una marca de <span className="bolded">Magisterial Education America </span>con sede en los Estados Unidos enfocada a la aplicación de la tecnología
                            en la Educación. Desde el año 2003 proveemos capacitación empresarial en lenguas extranjeras para empresas, con especialidad en el idioma Inglés. Somos un equipo de profesionales que pone a su disposición los mejores capacitadores, tecnología
                            de punta y servicio de excelencia.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <Progress />
                    </div>
                </div>
            </div>
            <div className="try-it pb-4">
               <h2 className="text-center text-bold pt-4"><strong>Compruébelo usted mismo</strong></h2> 
               <div className="button-holder">
                    <Link to='/Contacto' className="btn btn-primary text-uppercase" role="button">Contáctenos</Link>
               </div>
            </div>
            <OwlCarousel1 />
            <Footer />
        </div>
       );
    }
}

export default Nosotros