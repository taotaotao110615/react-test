import Swiper from 'swiper/dist/js/swiper.js'
import React from 'react';
import './carousel.css'
import 'swiper/dist/css/swiper.min.css'
import one from './cxk-one.jpg';
import two from  './cxk-two.jpg';
import san from  './cxk-san.jpg'

class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount () {

        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination : {
                el: '.swiper-pagination',
            }
        });
    }
    render() {
        return (
            <div className="App">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={one}/></div>
                        <div className="swiper-slide"><img src={two}/></div>
                        <div className="swiper-slide"><img src={san}/></div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        );
    }
}

export default Carousel;
