import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Admin from '../back/Admin'
import ModalProfileConnection from './ModalProfileConnection';


const ModalHomeConnection = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}Connexion with your account</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Connexion</ModalHeader>
        <ModalBody>
         <Admin/>
        </ModalBody>
        <ModalFooter>
          <Button style = {{ background : "#9600fa"}} onClick={toggle}>Login</Button>{' '}
          <ModalProfileConnection/>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalHomeConnection;