import React from 'react';
import { connect } from 'react-redux';

const mstp = state => ({
    toys: state.toys
});

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

export default connect (mstp)(ToyList);