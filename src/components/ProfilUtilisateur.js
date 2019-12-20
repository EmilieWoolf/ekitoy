import React, { Component } from 'react';
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import { GiWallet, GiThreeFriends } from 'react-icons/gi';
import { AiFillShopping } from 'react-icons/ai';
import { IoMdHelpCircle, IoMdStar, IoMdStarHalf } from 'react-icons/io';
import user7 from '../img/user7.jpg';
import Portemonnaie from './Portemonnaie.js';

export default class ProfilUtilisateur extends Component {

    render() {
        return (
            <div>
                <h2 style={{marginTop:"30px", marginBottom:"30px", textAlign:"center"}}>Mon profil</h2>

                <div className="container" style={{display:"flex", flexDirection:"row", marginBottom:"15px", marginTop:"-15px"}}>
                    <div>
                        <img src={user7} alt="Icône de l'utilisateur" style={{width:"80px"}} className="roundedImage"></img>
                    </div>
                    <div style={{marginLeft:"10px",  marginTop:"17px"}}>
                        <h5>Lucie</h5>
                        <h5 style={{color: "#eec759", marginTop:"-10px", marginLeft:'-4px'}}><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStarHalf/></h5>
                    </div>
                    <div style={{marginLeft:"10px", marginTop:"40px"}}>
                        <p>5 commentaires</p>
                    </div>     
                </div>

                <div style={{textAlign:"left", margin:"auto"}}>
                    <h3 style={{border:"1px solid #e5e2ce", padding:"13px", margin:"auto", marginBottom:"5px", backgroundColor:"#e8e3ce", width:"98%", fontSize:"1.5rem"}}><FaHeart/>  Favoris</h3>
                    <h3 style={{border:"1px solid #e5e2ce", padding:"13px", margin:"auto", marginBottom:"5px", backgroundColor:"#e8e3ce", width:"98%", fontSize:"1.5rem"}}><Portemonnaie/>  Mon porte monnaie</h3>
                    <h3 style={{border:"1px solid #e5e2ce", padding:"13px", margin:"auto", marginBottom:"5px", backgroundColor:"#e8e3ce", width:"98%", fontSize:"1.5rem"}}><AiFillShopping/>  Mes ventes et achats</h3>
                    <h3 style={{border:"1px solid #e5e2ce", padding:"13px", margin:"auto", marginBottom:"5px", backgroundColor:"#e8e3ce", width:"98%", fontSize:"1.5rem"}}><FaHandHoldingHeart/>  Mon association</h3>
                    <h3 style={{border:"1px solid #e5e2ce", padding:"13px", margin:"auto", marginBottom:"5px", backgroundColor:"#e8e3ce", width:"98%", fontSize:"1.5rem"}}><GiThreeFriends/>  Inviter des amis</h3>
                    <h3 style={{border:"1px solid #e5e2ce", padding:"13px", margin:"auto", marginBottom:"5px", backgroundColor:"#e8e3ce", width:"98%", fontSize:"1.5rem"}}><IoMdHelpCircle/>  Centre d'aide</h3>
                </div>
            </div>

            );
        }

    }