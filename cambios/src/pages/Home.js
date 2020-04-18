import React from 'react';
import Header from '.././layout/Header';

import home from '../img/home.png';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';

const Home = () => {
    return(
    <div>
      <Header/>
      <Wrap>
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
          <img alt='Imagen de home de artesanías de Artesanías Diana'src={home}></img>
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
height:100vh;
width:100vw;
position:fixed;
display: flex; 


.left{   margin-top:20em;
    margin-left:5em;
     width:50%;
    }

  
  
}
.right{
    width:50%;
    
    }

img{

   height:700px;
   margin-top: 50px; 
    margin-left: -150px; 
}
`
export default Home;