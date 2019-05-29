import React, { Component } from 'react';
import './ProgressBar.css';
import styled, { keyframes } from 'styled-components';



const FinalAnimationBar1 = styled.div`
 position: relative;
 display: block;
 font-size: 8px;
 line-height: 8px;
 border-radius: 10px;
 background: rgba(0, 0, 0, 0.1);
 box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);

`;
const FinalAnimationBarSpan = styled.span`
position: relative;
display: inline-block;
vertical-align: middle;
height: 10px;
border-radius: 10px;
background-color: #00e6e7;
background-size: 100%;
background-image: linear-gradient(to bottom, #00b3b4, #145090);
animation: progressAnim1 3s ease;
-webkit-animation-fill-mode: forwards;

@keyframes progressAnim1 {
  0% {
    width: 20%;
  }
  100% {
    width: 100%;
  }
}

  &:before {
    position: absolute;
    right: 0;
    bottom: 100%;
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-width: 0;
    border-bottom-width: 0;
    border-top-color: #145090;
    content: "";
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: calc(100% + 5px);
    z-index: 1;
    display: inline-block;
    content: attr(data-label);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 3px;
    font-size: 0.8em;
    background-color: #145090;
    color: #FFFFFF;
  }
`;

const FinalAnimationBarSpan2 = styled.span`
position: relative;
display: inline-block;
vertical-align: middle;
height: 10px;
border-radius: 10px;
background-color: #00e6e7;
background-size: 100%;
background-image: linear-gradient(to bottom, #00b3b4, #145090);
animation: progressAnim2 4s ease;
-webkit-animation-fill-mode: forwards;
@keyframes progressAnim2 {
  0% {
    width: 20%;
  }
  100% {
    width: 85%;
  }
}

  &:before {
    position: absolute;
    right: 0;
    bottom: 100%;
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-width: 0;
    border-bottom-width: 0;
    border-top-color: #145090;
    content: "";
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: calc(100% + 5px);
    z-index: 1;
    display: inline-block;
    content: attr(data-label);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 3px;
    font-size: 0.8em;
    background-color: #145090;
    color: #FFFFFF;
  }
`;

const FinalAnimationBarSpan3 = styled.span`
position: relative;
display: inline-block;
vertical-align: middle;
height: 10px;
border-radius: 10px;
background-color: #00e6e7;
background-size: 100%;
background-image: linear-gradient(to bottom, #00b3b4, #145090);
animation: progressAnim3 2s ease;
-webkit-animation-fill-mode: forwards;
@keyframes progressAnim3 {
  0% {
    width: 20%;
  }
  100% {
    width: 60%;
  }
}

  &:before {
    position: absolute;
    right: 0;
    bottom: 100%;
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-width: 0;
    border-bottom-width: 0;
    border-top-color: #145090;
    content: "";
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: calc(100% + 5px);
    z-index: 1;
    display: inline-block;
    content: attr(data-label);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 3px;
    font-size: 0.8em;
    background-color: #145090;
    color: #FFFFFF;
  }
`;

const FinalAnimationBarSpan4 = styled.span`
position: relative;
display: inline-block;
vertical-align: middle;
height: 10px;
border-radius: 10px;
background-color: #00e6e7;
background-size: 100%;
background-image: linear-gradient(to bottom, #00b3b4, #145090);
animation: progressAnim4 3.5s ease;
-webkit-animation-fill-mode: forwards;
@keyframes progressAnim4 {
  0% {
    width: 20%;
  }
  100% {
    width: 71%;
  }
}

  &:before {
    position: absolute;
    right: 0;
    bottom: 100%;
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-width: 0;
    border-bottom-width: 0;
    border-top-color: #145090;
    content: "";
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: calc(100% + 5px);
    z-index: 1;
    display: inline-block;
    content: attr(data-label);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 3px;
    font-size: 0.8em;
    background-color: #145090;
    color: #FFFFFF;
  }
`;

const FinalAnimationBarSpan5 = styled.span`
position: relative;
display: inline-block;
vertical-align: middle;
height: 10px;
border-radius: 10px;
background-color: #00e6e7;
background-size: 100%;
background-image: linear-gradient(to bottom, #00b3b4, #145090);
animation: progressAnim5 4s ease;
-webkit-animation-fill-mode: forwards;
@keyframes progressAnim5 {
  0% {
    width: 20%;
  }
  100% {
    width: 75%;
  }
}

  &:before {
    position: absolute;
    right: 0;
    bottom: 100%;
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-width: 0;
    border-bottom-width: 0;
    border-top-color: #145090;
    content: "";
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: calc(100% + 5px);
    z-index: 1;
    display: inline-block;
    content: attr(data-label);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 3px;
    font-size: 0.8em;
    background-color: #145090;
    color: #FFFFFF;
  }
`;

class Progress extends Component {
  render() {
    return (
      <div>
          <section className="pb-3">
              <h4 className="progress-title">Impacto en el Desempeño</h4>
            <FinalAnimationBar1 className="room-to-breathe">
              <FinalAnimationBarSpan className="percent-label" data-label="100%"></FinalAnimationBarSpan>
            </FinalAnimationBar1>
            <h4 className="progress-title pt-3">CLIENTES EMPRESARIALES</h4>
            <FinalAnimationBar1 className="final__animation-bar-2 room-to-breathe">
                <FinalAnimationBarSpan2 className="percent-label" data-label="85%"></FinalAnimationBarSpan2>
            </FinalAnimationBar1>
            <h4 className="progress-title pt-3">PROGRAMAS INTEGRALES</h4>
            <FinalAnimationBar1 className="final__animation-bar-3 room-to-breathe">
                <FinalAnimationBarSpan3 className="percent-label" data-label="60%"></FinalAnimationBarSpan3>
            </FinalAnimationBar1>
            <h4 className="progress-title pt-3">EXPERIENCIAS CON VALOR AGREGADO</h4>
            <FinalAnimationBar1 className="final__animation-bar-4 room-to-breathe">
                <FinalAnimationBarSpan4 className="percent-label" data-label="71%"></FinalAnimationBarSpan4>
            </FinalAnimationBar1>
            <h4 className="progress-title pt-3">INCREMENTO EN INDICES DE FINALIZACIÓN</h4>
            <FinalAnimationBar1 className="final__animation-bar-5 room-to-breathe">
                <FinalAnimationBarSpan5 className="percent-label" data-label="75%"></FinalAnimationBarSpan5>
            </FinalAnimationBar1>
          </section>
      </div>
    );
  }
}
export default Progress