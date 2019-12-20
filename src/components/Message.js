import React, { Component } from 'react';
import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpg';
import user3 from '../img/user3.jpg';
import user4 from '../img/user4.jpg';
import user5 from '../img/user5.jpg';
import './Association.css';
import './Message.css'

export default class Message extends Component {

    render() {
        return (
            
            <div style={{ backgroundColor: "white" }}>
                <h2 style={{ marginTop: "30px", marginBottom: "30px", textAlign: "center" }}>Messages</h2>
                <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="roundedImage">
                        <img src={user3} alt="Icône de l'utilisateur" ></img>
                    </div>
                    <div>
                        <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Jonathan</h5>
                        <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                    </div>
                </div>

                <div style={{ backgroundColor: "white" }}>
                    

                    <div style={{ backgroundColor: "white" }}>
                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                            <div className="roundedImage">
                                <img src={user1} alt="Icône de l'utilisateur" ></img>
                            </div>
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Emilie</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "white" }}>
                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                            <div className="roundedImage">
                                <img src={user5} alt="Icône de l'utilisateur" ></img>
                            </div>
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Lisa</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                        </div>
                    </div>  
                    
                    <div style={{ backgroundColor: "white" }}>
                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                            <div className="roundedImage">
                                <img src={user5} alt="Icône de l'utilisateur" ></img>
                            </div>
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Lisa</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                        </div>
                    </div>  
                    <div style={{ backgroundColor: "white" }}>
                        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                            <div className="roundedImage">
                                <img src={user4} alt="Icône de l'utilisateur" ></img>
                            </div>
                            <div>
                                <h5 style={{ textAlign: "left", marginLeft: "15px" }}>Nina</h5>
                                <p style={{ textAlign: "left", marginLeft: "15px" }}>La barbie est-elle en bon état? Si oui, puis je avoir des photos supplémentaires?</p>
                            </div>
                        </div>
                    </div>  
                    </div>
                </div>
                );
            }
    
        }
 