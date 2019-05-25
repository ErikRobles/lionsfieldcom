import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Jumbotron1 from '../components/Jumbotron1';
import Footer from '../components/Footer';


class Inicio extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <Jumbotron1 />
            <h1>This is the Home page</h1>
            <p>Content comming soon.</p>
            <Footer />
        </div>
       );
    }
}

export default Inicio