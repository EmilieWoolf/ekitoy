import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import barbie from '../img/barbie.jpeg';
import barbie_1 from '../img/barbie_1.jpeg';
import barbie_2 from '../img/barbie_2.jpeg';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {updateToys} from '../actions/updateToys';
import {Link} from 'react-router-dom';

const mstp = state => {
    return {
      toys: state.toys
    }
  };

class DescriptionArticle extends Component {

    componentDidMount() {
        const {toys} = this.props;
        if (toys === []) {
            this.props.updateToysList()
        }
    }

    componentDidUpdate() {
        const {toys} = this.props;
        if (toys === []) {
            this.props.updateToysList()
        }
    }
    
    render() {
        const { toys } = this.props;
        const { toyId } = this.props.match.params;
        console.log(toys);
        const toy = toys.find(toy => toy.id == toyId);
        console.log(toy);

        return (
            <div>
                <Carousel>
                    <div>
                        <img src='../back/public/{toy.pictures}' alt="photo1" />
                    </div>
                    <div>
                        <img src={barbie_1} alt="photo2" />
                    </div>
                    <div>
                        <img src={barbie_2} alt="photo3" />
                    </div>
                </Carousel>
                <div className="container" style={{justifyContent:"space-between"}}>
                    <Link to='/home'><button style={{fontSize:"40px"}}><FaLongArrowAltLeft/></button></Link>
                    <button style={{fontSize:"40px"}}>❤️</button>
                </div>
                <div style={{textAlign: "left", marginLeft:"4%"}}>                    
                    <h1>{toy.name}</h1>
                        <div className="container" style={{display: "flex", flexDirection:"row", marginRight:"10px"}}>
                            <h2>Bon état •</h2>
                            <h2 style={{color:"pink", marginLeft:"2%"}}>{toy.name}</h2>
                        </div>                    
                    <h3>{toy.price}€</h3>
                </div>
                <div className="conteneur">
                    <div>
                    <button style={{backgroundColor:"pink", borderRadius:"10px", width:"80%", margin:"10px", padding:"10px", fontSize:"20px"}}>Envoyer un message</button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"#ccc", borderRadius:"10px", width:"80%", padding:"10px", fontSize:"20px"}}>Acheter</button>
                    </div>
                </div>
                <div style={{textAlign:"left", marginLeft:"4%"}}>
                    <h2>Présentation de l'article</h2>
                    <p>{toy.description}</p>
                </div>
            </div>
            );
        }

    }

export default withRouter(connect(mstp)(DescriptionArticle));