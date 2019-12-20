import axios from 'axios';

export const updateToys = () => dispatch => {
      axios.get("http://localhost:5000/api/toy")
        .then(result => {
          console.log(result.data)
          dispatch({ type: "UPDATE_TOYS", payload: result.data });
        })
        .catch(e => console.log(e))
    };