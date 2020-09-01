
import React, { Component } from 'react'
import slider1 from './../../Assets/img/slider1.jpeg';
import './Slider.scss'
export default class Slider extends Component {
    render() {
        return (
            <div>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to={0} className="active" />
                        <li data-target="#carouselId" data-slide-to={1} />
             
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src={slider1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img src={slider1} alt="True slide" />
                        </div>
                  
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        )
    }
}
