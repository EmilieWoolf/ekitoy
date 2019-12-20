import React from 'react';
import './toycard.css';
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import { GiWallet, GiThreeFriends } from 'react-icons/gi';
import { AiFillShopping } from 'react-icons/ai';
import { IoMdHelpCircle, IoMdStar, IoMdStarHalf } from 'react-icons/io';

class ToyCard extends React.Component {
  constructor(props) {
    super(props);
    
  
 
  }
  render() {
    return (
      <>
        
          <figcaption>
          <div style={{textAlign:"left", marginLeft:"4%", margin:"auto"}}>
                    <h4 style={{border:"1px solid grey", padding:"13px", backgroundColor:"white"}}><FaHeart/> Favoris</h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><AiFillShopping/> Mes ventes et achats</h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><FaHandHoldingHeart/> Mon association</h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><GiThreeFriends/> Inviter des amis</h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><IoMdHelpCircle/> Centre d'aide</h4>
                </div>
          </figcaption>
        </>
      
    );
  }
}

export default ToyCard;


