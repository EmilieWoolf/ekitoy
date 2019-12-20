import React from 'react'
import ModalHomeConnection from './ModalHomeConnection'
import Facebook from './FaceBook';
import Google from './Google';
import './Home.css'
import logo from '../img/logo.png'


const Home = () => {
    return (
      <div className="containerFlex">
          <img src ={logo} alt="logo-Ekitoy"></img>
            <div className="button">
            <Facebook className="facebook_connection"> Connexion with FaceBook </Facebook>
            <Google className="google_connection">Connexion with Google</Google>
            <ModalHomeConnection/>
            </div>
            <div class="snowflakes" aria-hidden="true">
            <div class="snowflake">
            ❅
            </div>
            <div class="snowflake">
            ❅
            </div>
            <div class="snowflake">
            ❆
            </div>
            <div class="snowflake">
            ❄
            </div>
            <div class="snowflake">
            ❅
            </div>
            <div class="snowflake">
            ❆
            </div>
            <div class="snowflake">
            ❄
            </div>
            <div class="snowflake">
            ❅
            </div>
            <div class="snowflake">
            ❆
            </div>
            <div class="snowflake">
            ❄
            </div>
            </div>
      </div>
    );
  };
  
  export default Home;
