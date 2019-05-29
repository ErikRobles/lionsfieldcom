import React, { Component } from 'react';
import './Jumbotron2.css';

class Jumbotron2 extends Component {
    render() {
        return (
            <div className="jumbotron2">
                <div className="jumbotron-container pt-5 color-change">
                    <div className="row">
                        <div className="col-md-6"> 
                        </div>
                        <div className="col-md-6">
                            <div className="blue-back">
                                <p className="blue-back-text"><strong>Porque la mejor forma de aprender es divirtiéndose, nuestro principal objetivo es crear experiencias  incomparables para cualquier proyecto de capacitación empresarial, innovando en las herramientas para lograrlo y así obtener resultados medibles y reales.</strong></p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron2