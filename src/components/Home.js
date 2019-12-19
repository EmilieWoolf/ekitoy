import React from 'react'
import { Jumbotron} from 'reactstrap';
import ModalHomeConnection from './ModalHomeConnection'
import Facebook from './FaceBook';
import Google from './Google';
import './Home.css'

// import EkitoyLogo from './src/IMG/EkitoyLogo'

const Home = (props) => {
    return (
      <div>
        <Jumbotron style={{ background : "white"}}>
          <h1 className="display-3">EKITOY</h1>
          <p className="lead"></p>
          <hr className="my-2" />
          <img src ="https://zupimages.net/up/19/51/8845.png" alt="home-image" style ={{ "width" : "200px", "height" : "200px",}}></img>
          <p className="lead">
            <div className="button">
            <Facebook className="facebook_connection"> Connexion with FaceBook </Facebook>
            <Google className="google_connection">Connexion with Google</Google>
            <ModalHomeConnection/>
            </div>
          </p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Home;





