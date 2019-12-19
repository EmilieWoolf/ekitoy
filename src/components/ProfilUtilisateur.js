import React, { Component } from 'react';
import iconuser from '../IMG/iconuser.png';
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import { GiWallet, GiThreeFriends } from 'react-icons/gi';
import { AiFillShopping } from 'react-icons/ai';
import { IoMdHelpCircle, IoMdStar, IoMdStarHalf } from 'react-icons/io';

export default class ProfilUtilisateur extends Component {

    render() {
        return (
            <div>
                <h2 style={{marginTop:"30px", marginBottom:"30px", textAlign:"center"}}>Mon profil</h2>

                <div className="container" style={{display:"flex", flexDirection:"row", marginBottom:"15px", marginTop:"-15px"}}>
                    <div>
                        <img src={iconuser} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    </div>
                    <div style={{marginLeft:"10px",  marginTop:"17px"}}>
                        <h5>Lucas</h5>
                        <h5 style={{color: "#eec759", marginTop:"-10px", marginLeft:'-4px'}}><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStarHalf/></h5>
                    </div>
                    <div style={{marginLeft:"10px", marginTop:"40px"}}>
                        <p>5 commentaires</p>
                    </div>     
                </div>

                <div style={{textAlign:"left", marginLeft:"4%", margin:"auto"}}>
                    <h3 style={{border:"1px solid grey", padding:"13px"}}><FaHeart/> Favoris</h3>
                    <h3 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px"}}><GiWallet/> Mon porte monnaie</h3>
                    <h3 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px"}}><AiFillShopping/> Mes ventes et achats</h3>
                    <h3 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px"}}><FaHandHoldingHeart/> Mon association</h3>
                    <h3 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px"}}><GiThreeFriends/> Inviter des amis</h3>
                    <h3 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px"}}><IoMdHelpCircle/> Centre d'aide</h3>
                </div>
            </div>
            );
        }

    }