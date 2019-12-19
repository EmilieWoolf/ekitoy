import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import InputConnect from './InputConnect'

const ModalProfileConnection = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
  
    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    }
  
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                </FormGroup>
                {' '}
                <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Create Your Account</ModalHeader>
                <ModalBody>
                <InputConnect/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" style ={{background : "#9600fa" }}onClick={toggle}>Create your account</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalProfileConnection;