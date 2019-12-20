import React from 'react';
import './toycard.css';
import Modal from 'react-modal';
import ModalCardToy from './ModalCardToy'

class ToyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="FlexContainer">
        <div className="ToyCard" onClick={this.openModal}>
          <cite>{this.props.name}</cite>
          <img src={this.props.image} alt={this.props.name} />
          <figcaption>
            <p>
              <ModalCardToy/>
                
           
            
                

            </p>
          </figcaption>
        </div>
      </div>
    );
  }
}

export default ToyCard;


