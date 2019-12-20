import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Admin from '../back/Admin'
import { GiWallet } from 'react-icons/gi';
import './Association.css'

const Portemonnaie = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
        <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}<GiWallet/></Button>
        <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Connexion</ModalHeader>
            <ModalBody>
            <Admin/>
            </ModalBody>
            <ModalFooter>
            
            </ModalFooter>
        </Modal>
        </div>       
    );
  }

  export default Portemonnaie;
         