import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron3 from '../components/Jumbotron3';
import ContactForm from '../components/ContactForm';
import OwlCarousel1 from '../components/OwlCarousel1';


class Contacto extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron3 />
            <div className="container pt-5 pb-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <ContactForm />
                    </div>
                    <div className="col-12 col-md-6">
                            <h5 className="contact-form-header mb-3">Acerca de Lionsfield</h5>
                            <p className="content-2"> Somos una empresa de capacitación empresarial propiedad de Magisterial Education América, con sede en los Estados Unidos de América. Con más de 13 años en el mercado, ponemos a su disposición nuestro programa de inglés de negocios en México.</p>
                            <h5
                                className="contact-form-header mb-3">Horarios de Atención</h5>
                                <p className="content-2"><strong>Lunes a Viernes: </strong>9am - 6:00pm </p>
                                <h5 className="contact-form-header mb-3">Información de Contacto</h5>
                                <p className="content-2"><strong>Address</strong><br/>Paseo de la Reforma 350</p>
                                <p className="content-2"><strong>Correo Electrónico</strong><br/>atencion@lionsfield.mx</p>
                                <p className="aviso"><Link to="/Privacidad">Aviso de Privacidad</Link></p>  
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

export default Contacto