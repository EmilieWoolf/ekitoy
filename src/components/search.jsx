import React, { Component } from 'react';
// import SearchResults from 'react-filter-search';
import './search.css'
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import { GiWallet, GiThreeFriends } from 'react-icons/gi';
import { AiFillShopping } from 'react-icons/ai';
import { IoMdHelpCircle, IoMdStar, IoMdStarHalf } from 'react-icons/io';

const noWords = "*";
 
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      title : ''
    };
    this.handleChange = this.handleChange.bind
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    if (event.target.value.includes(noWords) === true) {
      return;
    }
    this.setState({ title: event.target.value });
  }

  render() {
    const { data, value } = this.state;
    const noWordsInput = this.state.title.length === noWords;
    return (
      <div className="bgColor">
   

        <form className="MyTitleForm" onSubmit={this.handleSubmit}>
        <label htmlFor="title"></label>
        <p style= {{ fontSize : "20px"}}>
          Choose : <strong>{this.state.title}</strong>
        </p>
        <input
        style = {{ padding : "15px" , "height" :"15px"}}
          className={noWordsInput ? "noWords-length" : "value-ok"}
          onChange={this.handleChange}
        />
        
      </form>
        <figcaption>
          <div style={{textAlign:"left", marginLeft:"4%", margin:"auto", marginTop : "100px" , "padding": "15px" , "borderRadius" : "50%"}}>
                    <h4 style={{border:"1px solid grey", padding:"13px", backgroundColor:"white"}}><FaHeart/> Favoris</h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><FaHeart/> Tout</h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><FaHeart/> Moins de 5 ans</h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><FaHeart/> 5 ans et plus </h4>
                    <h4 style={{border:"1px solid grey", padding:"13px", marginTop:"-11px", backgroundColor:"white"}}><FaHeart/> Adultes </h4>
                </div>
          </figcaption>

       
      </div>
    );
  }
}

