import React from 'react';
import Header from '.././layout/Header';

import home from '../img/home.png';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';
import './style.css'

const Home = () => {
    return(
    <div>
      <Header/>
      <Wrap className='wrap'>
      <div className='left'>
          <h2>En este sitio encontrarás:</h2>
          <br/>
          <h3>Una pequeña historia...</h3>
          
          <ul>
          <li><a href='/shop'>Catálogo Online</a> </li>
          <li><a href='/faq'>Preguntas más frecuentes</a></li>
          <li><a  href='/contact'>Contacto</a></li>
          </ul>
        </div>
        <div className='right'>
          <img className='home-img'alt='Imagen de home de artesanías de Artesanías Diana'src={home}></img>
        </div>
        </Wrap>
    </div>
    
    )
}
const Wrap= styled.div`
font-family: 'MyWebFont', Caviar Dreams, sans-serif;
font-weight: bold;
background: ${Paleta.primarybg};
color:${Paleta.primary};
margin-top:20vh;
height:80vh;
width:100vw;
position:fixed;
display: flex; 
flex-wrap:no-wrap;



`
export default Home;