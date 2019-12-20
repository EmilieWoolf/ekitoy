import React, { Component } from 'react';
import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpg';
import user3 from '../img/user3.jpg';
import user4 from '../img/user4.jpg';
import user5 from '../img/user5.jpg';
import './Message.css'

export default class Message extends Component {

    render() {
        return (
            
            <div className="message">
                <h2>Messages</h2>
                <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                    <img src={user3} alt="Icône de l'utilisateur" ></img>
                    <div>
                        <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Jonathan</h5>
                        <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                    </div>
                </div>
                    

                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                                <img src={user1} alt="Icône de l'utilisateur" ></img>
                            
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Emilie</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                    </div>

                    
                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                            
                                <img src={user5} alt="Icône de l'utilisateur" ></img>
                            
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Lisa</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                        </div>
                 
               
                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                                <img src={user2} alt="Icône de l'utilisateur" ></img>
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Lisa</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                    </div>  
                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                                <img src={user4} alt="Icône de l'utilisateur" ></img>
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Nina</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                        </div>
                    </div>
                );
            }
    
        }
 