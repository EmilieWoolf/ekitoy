import React, { Component } from 'react';
// import SearchResults from 'react-filter-search';
import './search.css'
import ToyList from './userslist'
 
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
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
  render() {
    const { data, value } = this.state;
    return (
      <div className="bgColor">
        <input className="inputZone" type="text" value={value} onChange={this.handleChange} />
        {/* <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name} </span>
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        /> */}
        <ToyList />
      </div>
    );
  }
}