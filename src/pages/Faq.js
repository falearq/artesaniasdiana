import React from 'react';
import Header from '.././layout/Header';

import styled from 'styled-components';
import {Paleta} from '../Colors.js';
import faq from '../img/faq.png';



const Faq = () => {
    return(
    <div>
      <Header/>
      <FaqWrap>
      <div className='left'>
          <h2>F.A.Q. (Preguntas Frecuentes)</h2>
          <br></br>
          <h3>1.¿Dónde conseguir las artesanías de <i>Artesanías Diana</i>?</h3>
          <hr></hr>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          </p>
        </div>
        <div className='right'>
          <img alt='Imagen de faq de artesanías de Artesanías Diana'src={faq}></img>
        </div>
        </FaqWrap>
    </div>
    )
}
const FaqWrap= styled.div`
font-family: 'MyWebFont', Caviar Dreams, sans-serif;
font-weight: bold;
background: ${Paleta.primarybg};
color:${Paleta.primary};
margin-top:20vh;
height:80vh;
width:100vw;

display:flex;
flex-wrap:wrap;


.left{  width:40%;

margin-left:10%;
}

.right{
   
    width:30%;
 
  
    }
img{

   max-width:120%;
  
 
}
@media only screen and (max-width:600px) {
.left{ 
 
     width:100vw;
     margin-right:8%;
    
    }

.right{
    width:90vw;
    padding:1em;
  
  
    
    }

img{

  
    margin-top: 0;
    margin-left: 0; 
}

            
}
`

export default Faq;