import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class ELearning extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <h1>This is the Full E-Learning page</h1>
            <p>Content comming soon.</p>
            <Footer />
        </div>
       );
    }
}

export default ELearning