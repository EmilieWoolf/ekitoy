import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mstp = state => ({
    toys: state.toys
});

const mapDispatchToProps = (dispatch) => {
    return {
      updateToys : function () {
        return (dispatch) => {
          axios.get("/api/toy")
            .then(result => {
            dispatch({type: "UPDATE_TOYS", payload: result.data});
          })
        };
      }
    }
  }

const ToyList = ({toys}) => {
    return (
    <div>
        {toys.map(toy => 
            <div>
                <p>{toy.name}</p> 
            </div>
        )}
    </div>
)};

export default connect(mstp)(ToyList)
