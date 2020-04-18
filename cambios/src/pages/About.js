import React from 'react';
import Header from '.././layout/Header';
import about from '../img/about.png';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';



const About = () => {
    return(
    <div>
      <Header/>
      <AboutWrap>
     
        <div className='left'>
          <img alt='Imagen de about de artesanías de Artesanías Diana'src={about}></img>
        </div>
         <div className='right'>
          <h2>¿Quiénes somos?</h2>
          <h3>Artesanías Diana</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          </p>
        </div>
        </AboutWrap>
    </div>
    )
}
const AboutWrap= styled.div`
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
}

.right{
   
    width:30%;
    margin-top:15em;
    text-align: right;
    }
img{
  repeat: no-repeat;
  margin-left:7em;
   height:350px;
  
 
}
`

export default About;