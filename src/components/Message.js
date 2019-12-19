import React, { Component } from 'react';
import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpg';
import user3 from '../img/user3.jpg';
import user4 from '../img/user4.jpg';
import user5 from '../img/user5.jpg';
import user6 from '../img/user6.jpg';
import './Association.css';

export default class Message extends Component {

    render() {
        return (
            <div style={{backgroundColor:"#eeebda"}}>
                <h2 style={{marginTop:"30px", marginBottom:"30px", textAlign:"center"}}>Messages</h2>
                <div className="container" style={{display:"flex", flexDirection:"row"}}>
                    <div className="roundedImage">
                        <img src={user3} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Jonathan</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Pouvez vous me donner plus d'informations sur le produit ?</p>
                    </div>
                </div>

                <div className="container" style={{display:"flex", flexDirection:"row", borderTop:"1px solid white", marginBottom:"13px"}}>
                    <div className="roundedImage" style={{marginTop:"10px"}}>
                        <img src={user1} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Marie</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Qu'avez vous pensez de la barbie ?</p>
                    </div>
                </div>


                <div className="container" style={{display:"flex", flexDirection:"row", borderTop:"1px solid white", marginBottom:"13px"}}>
                    <div className="roundedImage" style={{marginTop:"10px"}}>
                        <img src={user2} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Yasmine</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Est-il possible de baisser le prix à 5€ ?</p>
                    </div>
                </div>


                <div className="container" style={{display:"flex", flexDirection:"row", borderTop:"1px solid white", marginBottom:"13px"}}>
                    <div className="roundedImage" style={{marginTop:"10px"}}>
                        <img src={user4} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Laura</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Qu'avez vous pensez de la barbie ?</p>
                    </div>
                </div>

                <div className="container" style={{display:"flex", flexDirection:"row", borderTop:"1px solid white", marginBottom:"13px"}}>
                    <div className="roundedImage" style={{marginTop:"10px"}}>
                        <img src={user5} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Lily</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Qu'avez vous pensez de la barbie ?</p>
                    </div>
                </div>


            </div>
            );
        }

    }