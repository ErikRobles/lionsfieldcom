import React, { Component } from 'react';
import './Footer.css';
import logo from '../assets/img/logo.png';

class Footer extends Component {
    getYear() {
        return new Date().getFullYear();
    }
    render() {
        return (
            <footer className="footer">
                <div className="footer-logo text-center mt-3">
                <a className="lionsfield-logo" href="/"><img src={logo}></img></a>
                </div>
                <div className="social">
                    <a href="/">
                        <i className="fab fa-twitter pl-3 pr-3"></i>
                    </a>
                    <a href="https://www.facebook.com/Become-by-Lionsfield-2245436365705598/" target="_blank">
                        <i className="fab fa-facebook-f pl-3 pr-3"></i>
                    </a>
                </div>
                <div className="copyright-info pt-3 pb-3">
                    <span>
                    All Rights Reserved &copy; {this.getYear()} 
                    </span>
                </div>
            </footer>
        );
    }
}

export default Footer