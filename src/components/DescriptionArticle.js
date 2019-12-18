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
                <div style={{textAlign: "left", marginLeft:"4%"}}>
                    <h1>Barbie ever flex</h1>
                    <h2>Bon état</h2>
                    <h3>12,00€</h3>
                </div>
                <div className="conteneur">
                    <div>
                    <button style={{backgroundColor:"pink", borderRadius:"10px", margin:"10px", padding:"10px", fontSize:"20px"}}>Envoyer un message</button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"#ccc", borderRadius:"10px", width:"201px", padding:"10px", fontSize:"20px"}}>Acheter</button>
                    </div>
                </div>
                
            </div>
            );
        }

    }