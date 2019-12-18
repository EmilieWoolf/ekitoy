import React, { Component } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

export default class Association extends Component {

    render() {
        return (
            <div>
                <div className="container" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"space-between"}}>
                    <button style={{fontSize:"40px"}}><FaLongArrowAltLeft/></button>
                    <h5 style={{marginTop:"22px"}}>Mon association</h5>
                </div>
                <div>
                    <form style={{border:"1px solid #ccc", width:"50%", borderRadius:"10px", margin:"auto"}}>
                        <select>
                            <option>Emmaüs</option>
                            <option>Restaurants du coeur</option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                    </form>    
                </div>
            </div>
            );
        }

    }