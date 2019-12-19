import React from 'react';
import './toycard.css';
import Modal from 'react-modal';


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
              <span
                className={this.state.favorite ? 'is-favorite' : ''}
                onClick={event => {
                  const newFavorite = !this.state.favorite;
                  this.setState({ favorite: newFavorite });
                }}
              >
                &#9733;
              </span>
            
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                >
        
                  <button onClick={this.closeModal}>close</button>
                  <img src={this.props.image} alt={this.props.name} />
                  
                </Modal>

            </p>
          </figcaption>
        </div>
      </div>
    );
  }
}

export default ToyCard;
