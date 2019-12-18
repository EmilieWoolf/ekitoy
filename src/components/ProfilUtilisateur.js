import React, { Component } from 'react';
import iconuser from '../img/iconuser.png'
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import { GiWallet, GiThreeFriends } from 'react-icons/gi';
import { AiFillShopping } from 'react-icons/ai';
import { IoMdHelpCircle } from 'react-icons/io';

export default class ProfilUtilisateur extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <img src={iconuser} alt="Icône de l'utilisateur" style={{width:"80px"}}></img>
                    <h5>Jonathan</h5>
                </div>
                <div style={{textAlign:"left", marginLeft:"4%"}}>
                    <p style={{border:"1px solid grey", borderRadius:"10px", padding:"2px"}}><FaHeart/> Favoris</p>
                    <p style={{border:"1px solid grey", borderRadius:"10px", padding:"2px"}}><GiWallet/> Mon porte monnaie</p>
                    <p style={{border:"1px solid grey", borderRadius:"10px", padding:"2px"}}><AiFillShopping/> Mes ventes et achats</p>
                    <p style={{border:"1px solid grey", borderRadius:"10px", padding:"2px"}}><FaHandHoldingHeart/> Mon association</p>
                    <p style={{border:"1px solid grey", borderRadius:"10px", padding:"2px"}}><GiThreeFriends/> Inviter des amis</p>
                    <p style={{border:"1px solid grey", borderRadius:"10px", padding:"2px"}}><IoMdHelpCircle/> Centre d'aide</p>
                </div>
            </div>
            );
        }

    }