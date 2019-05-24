import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha';
import styled from 'styled-components';

const Styles = styled.div`
   .g-recaptcha {
      transform: scale(0.77);
      -webkit-transform: scale(0.77);
      transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
   }
`;

const SITE_KEY = "6LfJ6X0UAAAAAFt9JQB0Nk33I9jqdcJvNCFHB2xU";

export default class RecaptchaFunction extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      isVerified: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }


handleSubmit() {
  if(this.state.isVerified) {
    alert('Tu mensaje fue enviado exitosamente!')
  } else {
    alert('Favor de verificar que usted es un humano y no un robot!')
  }
}

recaptchaLoaded() {
  console.log('reCaptcha has successfully loaded');
}

verifyCallback(response) {
  if(response) {
    this.setState({
      isVerified: true
    })
  }
}
render() {
return (
    <React.Fragment>
      <Recaptcha 
        className="g-recaptcha"
        sitekey={SITE_KEY}
        render="explicit"
        onloadCallback={this.recaptchaLoaded}
        verifyCallback={this.verifyCallback}
      /> 
      </React.Fragment>
    )
  }
}
