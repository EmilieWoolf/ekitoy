import React from 'react';
import { connect } from 'react-redux';
import {updateToys} from '../actions/updateToys';

const mstp = state => {
  return {
    toys: state.toys
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateToysList: () => {
      return dispatch(updateToys())
    },
  }
}

class ToyList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateToysList()
    console.log(this.props.toys)
  }

  render() {
    const { toys } = this.props;
    return (
      <div>
        {toys.map(toy =>
          <div>
            <p>{toy.name}</p>
          </div>
        )}
      </div>
    )
  }
};

export default connect(mstp, mapDispatchToProps)(ToyList)
