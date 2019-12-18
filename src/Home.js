import React from 'react'
import { Jumbotron} from 'reactstrap';
import ModalHomeConnection from './ModalHomeConnection'
// import EkitoyLogo from './src/IMG/EkitoyLogo'

const Example = (props) => {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">EKITOY</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          {/* <img src= {EkitoyLogo}></img> */}
          <p className="lead">
            <ModalHomeConnection/>
          </p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Example;





