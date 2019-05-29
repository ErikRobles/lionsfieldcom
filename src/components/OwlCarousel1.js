import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Renault from '../assets/img/Renault-e1437433948637.jpg';
import HSBC from '../assets/img/hsbc-headquarters-reception-5616x3159-e1437435468875.jpg';
import Hiab from '../assets/img/hiab-xs-033_01-e1437438572212.jpg';
import GE from '../assets/img/451079448-e1437436259823.jpg';
import HolidayInn from '../assets/img/7607d741_welcm_extr_06_s-original.jpg';
import Toyota from '../assets/img/2014-04-28-AUTOS-TOYOTA-MOTOR-MARKE-e1437439756921.jpg';


class OwlCarousel1 extends React.Component{
    render() {
      return (
        <div className="images-section pt-3 pb-3">
            <div className="container pt-5 pb-5">
                <OwlCarousel 
                    className="owl-carousel owl-theme"
                    loop={true}
                    dots={true}
                    items={3}
                    margin={2}
                    center={true}
                    nav={true}
                    responsive={
                        {0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5
                        }
                    }
                    }
                >     
                <div className="item"><img className="grey" src={Renault} alt="" /></div>
                <div className="item"><img className="grey" src={HSBC} alt="" /></div>
                    <div className="item"><img className="grey" src={Hiab} alt="" /></div>
                    <div className="item"><img className="grey" src={GE} alt="" /></div>
                    <div className="item"><img className="grey" src={HolidayInn} alt="" /></div>
                     <div className="item"><img className="grey" src={Toyota} alt="" /></div>
                </OwlCarousel>
            </div>
        </div>
      )
    }
}

export default OwlCarousel1