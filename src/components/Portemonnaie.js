import React, { Component } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { IoMdCog } from 'react-icons/io';

export default class Portemonnaie extends Component {

    render() {
        return (
            <div>
                <div className="container" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"space-between"}}>
                    <button style={{fontSize:"40px"}}><FaLongArrowAltLeft/></button>
                    <h5 style={{marginTop:"22px"}}>Mon porte monnaie</h5>
                    <button style={{fontSize:"40px"}}><IoMdCog/></button>
                </div>
                <div>
                    <h1>0,00€</h1>
                    <h3>Montant disponible</h3>
                    <button style={{backgroundColor:"#4a90e2", borderRadius:"10px", width:"50%", margin:"10px", padding:"10px", fontSize:"20px"}}>Transférer</button>
                </div>
            </div>
            );
        }

    }