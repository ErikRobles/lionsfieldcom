import React, { Component } from 'react';
import './ContactForm.css';
import axios from 'axios';


class ContactForm extends Component { 
constructor() {
        super()

        this.state = {
           name: '',
           subject: '', 
           mail: '',
           message: '' 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, subject, mail, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            subject,
            mail,
            message
        })
    }
    render() {
      return (
        <div className="container-2">
                <div className="main-contact">
                    <main>
                        <h5 className="contact-form-header mb-3">Solicitud de Contacto</h5>
                        <p className="content-2">
                        Por favor, proporcione los siguientes datos para recibir mayor información. A  la brevedad, uno de nuestros ejecutivos le atenderá. Siéntase seguro, sus datos se encuentran progetidos por nuestra política de privacidad, la cual puede consultar al final de esta página.  </p>
                        <form className="contact-form pb-3" id="contact-form" method="post" onSubmit={this.handleSubmit.bind(this)} action="/api/form">
                            <div className="form-group">
                            <label className="content-2" htmlFor="inputName">Nombre Completo (Campo Requerido)</label>
                            <input className="form-control" id="name" type="text" name="name" onChange={this.hanglechange} required="" aria-required="true" patter="[A-Za-z-0-9]+"/>
                            </div>
                            <div className="form-group">
                            <label className="content-2" htmlFor="inputSubject">Empresa</label>
                            <input className="form-control" id="subject" type="text" name="subject" onChange={this.hanglechange} patter="[A-Za-z-0-9]+"/>
                            </div>
                            <div className="form-group">
                            <label className="content-2" htmlFor="inputEmail4">Correo (Campo Requerido)</label>
                            <input className="form-control" id="mail" type="email" name="mail" onChange={this.hanglechange} required="" aria-required="true"/>
                            </div>
                            <div className="form-group">
                            <label className="content-2" htmlFor="inputTextarea">Mensaje (Campo Requerido)</label>
                            <textarea className="form-control" id="message" name="message" onChange={this.hanglechange} required="" aria-required="true"></textarea>
                            </div>
                            <button className="mt-3 btn btn-dark custom-button" type="submit" name="submit">ENVIAR</button>
                        </form>
                    </main>
                </div>
            </div>
      );
    }
}

export default ContactForm