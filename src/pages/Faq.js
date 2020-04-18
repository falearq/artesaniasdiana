import React from 'react';
import Header from '.././layout/Header';
import about from '../img/about.png';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';
import faq from '../img/faq.png';



const Faq = () => {
    return(
    <div>
      <Header/>
      <FaqWrap>
      <div className='left'>
          <h2>¿Quiénes somos?</h2>
          <h3>Artesanías Diana</h3>
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
height:100vh;
width:100vw;

display:flex;
flex-wrap:wrap;


.left{  width:50%;
margin-top:15em;
margin-left:7em;
}

.right{
   
    width:30%;
    margin-top:15em;
  
    }
img{
  repeat: no-repeat;
  margin-left:7em;
   height:350px;
  
 
}
`

export default Faq;