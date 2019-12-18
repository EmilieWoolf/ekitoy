import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import barbie from '../IMG/barbie.jpeg';
import barbie_1 from '../IMG/barbie_1.jpeg';
import barbie_2 from '../IMG/barbie_2.jpeg';

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
                <div className="container" style={{justifyContent:"space-between"}}>
                    <button style={{fontSize:"40px"}}><FaLongArrowAltLeft/></button>
                    <button style={{fontSize:"40px"}}>❤️</button>
                </div>
                <div style={{textAlign: "left", marginLeft:"4%"}}>                    
                    <h1>Barbie ever flex</h1>
                        <div className="container" style={{display: "flex", flexDirection:"row"}}>
                            <h2>Bon état •</h2>
                            <h2 style={{color:"pink", marginLeft:"2%"}}>Barbie</h2>
                        </div>                    
                    <h3>12,00€</h3>
                </div>
                <div className="conteneur">
                    <div>
                    <button style={{backgroundColor:"pink", borderRadius:"10px", width:"80%", margin:"10px", padding:"10px", fontSize:"20px"}}>Envoyer un message</button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"#ccc", borderRadius:"10px", width:"80%", padding:"10px", fontSize:"20px"}}>Acheter</button>
                    </div>
                </div>
                <div style={{textAlign:"left", marginLeft:"4%"}}>
                    <h2>Présentation de l'article</h2>
                    <p>Sublime barbie avec son pantalon imitation cuir argenté et ses différentes perruques de rock star</p>
                </div>
            </div>
            );
        }

    }