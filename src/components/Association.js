import React, { Component } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

export default class Association extends Component {

    render() {
        return (
            <div>
                <div className="container" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"space-between"}}>
                    <button style={{fontSize:"40px"}}><FaLongArrowAltLeft/></button>
                    <h5 style={{marginTop:"22px"}}>Mon association</h5>
                </div>
                <div>
                    <select>
                        <option>Emmaüs</option>
                        <option>Restaurants du coeur</option>
                        <option>Greenpeace</option>
                        <option>SPA</option>
                        <option>Sea Sheperd</option>
                        <option></option>
                    </select>
                </div>
                <button style={{backgroundColor:"#4a90e2", borderRadius:"10px", width:"50%", margin:"10px", padding:"5px", fontSize:"20px"}}>Enregistrer</button>
            </div>
            );
        }

    }