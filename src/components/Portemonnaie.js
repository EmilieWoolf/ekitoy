import React, { Component } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { IoMdCog } from 'react-icons/io';
import './Association.css'

export default class Portemonnaie extends Component {

    render() {
        return (
            <div>
                <div className="flex-container" style={{display:"flex", flexDirection:"auto", justifyContent:"center", alignContent:"space-between"}}>
                    <button className="item auto" style={{fontSize:"40px"}}><FaLongArrowAltLeft/></button>
                    <h5 className="item auto" style={{marginTop:"22px", fontSize:"20px"}}>Mon porte monnaie</h5>
                    <button className="item auto" style={{fontSize:"40px", color:"#9a54fa"}}><IoMdCog/></button>
                </div>
                <div className="centre">
                    <h1>0,00€</h1>
                    <h4>Montant disponible</h4>
                    <button style={{backgroundColor:"#9a54fa", borderRadius:"10px", width:"50%", margin:"10px", padding:"6px", fontSize:"20px"}}>Transférer</button>
                </div>
            </div>
            );
        }

    }