import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Gamification extends Component {
    render() {
       return (
        <div>
            <Navbar />
            <h1>This is the Gamification page</h1>
            <p>Content comming soon.</p>
            <Footer />
        </div>
       );
    }
}

export default Gamification