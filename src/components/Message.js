import React, { Component } from 'react';
import iconuser from '../IMG/iconuser.png';

export default class Message extends Component {

    render() {
        return (
            <div>
                <h1 style={{marginBottom:"30px"}}>Messages</h1>
                <div className="container" style={{display:"flex", flexDirection:"row"}}>
                    <div>
                        <img src={iconuser} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Jonathan</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Pouvez vous me donner plus d'informations à propos du produit ?</p>
                    </div>
                </div>

                <div className="container" style={{display:"flex", flexDirection:"row", borderTop:"1px solid grey", marginBottom:"13px"}}>
                    <div style={{marginTop:"10px"}}>
                        <img src={iconuser} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Marie</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Qu'avez vous pensez de la barbie ?</p>
                    </div>
                </div>


                <div className="container" style={{display:"flex", flexDirection:"row", borderTop:"1px solid grey", marginBottom:"13px"}}>
                    <div style={{marginTop:"10px"}}>
                        <img src={iconuser} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Yasmine</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Qu'avez vous pensez de la barbie ?</p>
                    </div>
                </div>


                <div className="container" style={{display:"flex", flexDirection:"row", borderTop:"1px solid grey", marginBottom:"13px"}}>
                    <div style={{marginTop:"10px"}}>
                        <img src={iconuser} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>Laura</h5>
                        <p style={{textAlign:"left", marginLeft:"15px"}}>Qu'avez vous pensez de la barbie ?</p>
                    </div>
                </div>
            </div>
            );
        }

    }