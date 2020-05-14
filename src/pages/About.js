import React from 'react';
import Header from '.././layout/Header';
import about from '../img/about.png';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';



const About = () => {
    return(
    <div>
      <Header/>
      <AboutWrap className='wrap'>
     
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
margin-top:10vh;
height:80vh;
width:100vw;
display:flex;
flex-wrap:wrap;
flex-flow:row;
font-size:min(max(1em,2em)1em);





.left{  
  display:flex;
  width:50%;
  margin-top:10%;
  justify-content:center;
  align-items:center;
  margin-left:4%;

}

.right{
  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items:center;
  text-align:center;
    width:50%;
    margin-top:15%;
    margin-right:5%;
    
    
    }
img{
 
  
   max-width:80%;
  
 
}
p{
  
  width: 70%;
}
@media only screen and (max-width:790px) {
  flex-flow:column;
  margin-top:20vh;
.left{ 
 
     width:100%;
     margin-left:0;
    }

.right{
    width:100%;
    padding:1em;
  
    
    }
            
}
`

export default About;