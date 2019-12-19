import React, { Component } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import './Association.css';

export default class Association extends Component {

    render() {
        return (
            <div>
                <div className="container" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"space-between"}}>
                    <button style={{fontSize:"40px"}}><FaLongArrowAltLeft/></button>
                    <h5 style={{whiteSpace:"nowrap", marginTop:"25px"}}>Mon association</h5>
                </div>
                <div className="centre">
                    <p style={{textAlign:"center", fontSize:"17px"}}>Sélectionnez l'association à qui vous souhaitez reverser une partie du montant de vos achats !</p>
                    <select style={{border:"1px solid #ccc", borderRadius:"10px", backgroundColor:"#fff", padding:"5px"}}>
                        <option>Emmaüs</option>
                        <option>Restos du coeur</option>
                        <option>Greenpeace</option>
                        <option>SPA</option>
                        <option>Sea Sheperd</option>
                    </select>
                    <button style={{backgroundColor:"#9a54fa", borderRadius:"10px", margin:"10px", padding:"5px", fontSize:"20px"}}>Enregistrer</button>
                </div>
            </div>
            );
        }

    }