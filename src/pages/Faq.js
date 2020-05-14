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
          <img className='trans' alt='Imagen de faq de artesanías de Artesanías Diana'src={faq}></img>
        </div>
        </FaqWrap>
    </div>
    )
}
const FaqWrap= styled.div`
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
width:30%;
justify-content:center;
align-items:center;
text-align:center;
margin-left:10%;


}

.right{
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;
    margin-left:10%;
    
 
  
    }
img{
  max-width:80% ;
  
}
@media only screen and (max-width:790px) {
flex-flow:column;
.left{
  align-self:center;
  margin-top:10%;
  width:80%;
  margin-left:0;
}
.right{
  width:100%;
  margin-left:0;
}
}

`

export default Faq;