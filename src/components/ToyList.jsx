import React from 'react';
import { connect } from 'react-redux';

const mstp = state => ({
    toys: state.toys
});

const mapDispatchToProps = dispatch => {
    return {
      updateToys : function () {
        return (dispatch) => {
          axios.get("/api/toys")
            .then(result => {
            dispatch({type: "UPDATE_TOYS", payload: result.data});
          })
        };
      }
    }
  }

const ToyList = ({ toys }) => {
    return (
    <div>
        {toys.map(toy => 
            <div>
                <p>{toy.name}</p> 
                </div>
                )}
    </div>
)};

export default connect(mstp,mapDispatchToProps)(ToyList)
