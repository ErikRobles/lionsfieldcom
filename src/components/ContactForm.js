import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    render() {
      return (
        <div className="container-2">
                <div className="main-contact">
                    <main>
                        <h5 className="contact-form-header mb-3">Solicitud de Contacto</h5>
                        <p className="content-2">
                        Por favor, proporcione los siguientes datos para recibir mayor información. A  la brevedad, uno de nuestros ejecutivos le atenderá. Siéntase seguro, sus datos se encuentran progetidos por nuestra política de privacidad, la cual puede consultar al final de esta página.  </p>
                        <form className="contact-form pb-3" method="post" action="contacto/send">
                            <div className="form-group">
                            <label className="content-2" for="inputName">Nombre Completo (Campo Requerido)</label>
                            <input className="form-control" id="inputName" type="text" name="name" required="" aria-required="true" patter="[A-Za-z-0-9]+"/>
                            </div>
                            <div className="form-group">
                            <label className="content-2" for="inputSubject">Empresa</label>
                            <input className="form-control" id="inputSubject" type="text" name="subject" patter="[A-Za-z-0-9]+"/>
                            </div>
                            <div className="form-group">
                            <label className="content-2" for="inputEmail4">Correo (Campo Requerido)</label>
                            <input className="form-control" id="inputEmail4" type="email" name="mail" required="" aria-required="true"/>
                            </div>
                            <div className="form-group">
                            <label className="content-2" for="inputTextarea">Mensaje (Campo Requerido)</label>
                            <textarea className="form-control" id="inputTextarea" name="message" required="" aria-required="true"></textarea>
                            </div>
                            <button className="mt-3 btn btn-dark custom-button" type="submit" name="submit">ENVIAR            </button>
                        </form>
                    </main>
                </div>
            </div>
      );
    }
}

export default ContactForm