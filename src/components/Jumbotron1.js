import React, { Component } from 'react';
import './Jumbotron1.css';

class Jumbotron1 extends Component {
    render() {
        return (
            <div className="jumbotron1">
                <div className="jumbotron-container pt-5 color-change">
                    <div className="caption-background p-2">
                        <div className="caption caption text-center pt-1">Creamos la Capacitación del Futuro</div>
                        <div className="sub-caption text-center pb-1"><h3>Optimizamos su inversión en capacitación con HCID (Human Computer Interaction Design), para lograr resultados sin precedentes <br></br><br></br>
                        La mejor experiencia de interacción entre usuarios y tecnología</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron1