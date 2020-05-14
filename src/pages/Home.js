import React from 'react';
import Header from '.././layout/Header';

import home from '../img/home.png';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';


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
          <img className='home-img trans'alt='Imagen de home de artesanías de Artesanías Diana'src={home}></img>
        </div>
        </Wrap>
    </div>
    
    )
}
const Wrap= styled.div`
margin-top:20vh;
height:80vh;
width:100vw;

display:flex;
flex-wrap:wrap;
font-family: 'MyWebFont', Caviar Dreams, sans-serif;
font-weight: bold;
background: ${Paleta.primarybg};
color:${Paleta.primary};
flex-flow:row;
font-size:min(max(1em,2em)1em);
.left{ 
  margin-top:0;
   
display:flex;
flex-flow:column;
width:50%;
justify-content:center;
align-items:center;



}

.right{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:50%;
    
 
  
    }
.home-img{
  max-width:100% ;
  min-width:100%;
  
}
a:visited{
  color:${Paleta.secondary}
}
@media only screen and (max-width:790px) {
flex-flow:column;
.left{
  margin-top:10%;
  width:100%;
}
.right{
  width:100%;
}
}


`
export default Home;