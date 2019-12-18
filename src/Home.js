import React from 'react'
import { Jumbotron} from 'reactstrap';
import ModalHomeConnection from './ModalHomeConnection'
import FacebookLogin from './FaceBook';

// import EkitoyLogo from './src/IMG/EkitoyLogo'

const Example = (props) => {
    return (
      <div>
        <Jumbotron style={{ background : "white"}}>
          <h1 className="display-3">EKITOY</h1>
          <p className="lead"></p>
          <hr className="my-2" />
          {/* <img src= {EkitoyLogo}></img> */}
          <p className="lead">
            <FacebookLogin className="google_connection"> Connexion with FaceBook </FacebookLogin>
            <button className="facebook_connection">Facebook</button>
            <ModalHomeConnection/>
          </p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Example;





