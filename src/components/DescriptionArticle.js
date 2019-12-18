import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import barbie from '../img/barbie.jpeg';
import barbie_1 from '../img/barbie_1.jpeg';
import barbie_2 from '../img/barbie_2.jpeg';

export default class DescriptionArticle extends Component {

    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <img src={barbie} alt="photo1" />
                    </div>
                    <div>
                        <img src={barbie_1} alt="photo2" />
                    </div>
                    <div>
                        <img src={barbie_2} alt="photo3" />
                    </div>
                </Carousel>
            </div>
            );
        }

    }