import React from 'react'

import sliderimagone from '../images/slider/bg1.png'
import sliderimagtwo from '../images/slider/bg2.png'
import sliderimagthree from '../images/slider/bg3.png'

function Home() {
  return (
    <div className="tg-sliderbox">
        <div className="tg-imglayer">
            <img src="images/bg-pattran.png" alt="image desctription" />
        </div>
        <div id="tg-home-slider" className="tg-home-slider tg-haslayout">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="container">
                        <figure className="floating">
                            <img src={sliderimagone} alt="image description" />
                        </figure>
                        <div className="tg-slider-content">
                            <h1>Sporting de<span>Kerala</span></h1>
                            <div className="tg-btnbox">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="container">
                        <figure className="floating">
                            <img src={sliderimagtwo} alt="image description" />
                        </figure>
                        <div className="tg-slider-content">
                            <h1>sporting de<span>Kerala</span></h1>
                            <div className="tg-btnbox">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="container">
                        <figure className="floating">
                            <img src={sliderimagthree} alt="image description" />
                        </figure>
                        <div className="tg-slider-content">
                            <h1>sporting de<span>Kerala</span></h1>
                            <div className="tg-btnbox">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tg-btn-next">
                <span>next</span>
                <span className="fa fa-angle-down"></span>
            </div>
            <div className="tg-btn-prev">
                <span>prev</span>
                <span className="fa fa-angle-down"></span>
            </div>
        </div>
    </div>
  )
}

export default Home