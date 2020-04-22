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
margin-top:20vh;
height:80vh;
width:100vw;
display:flex;
flex-wrap:wrap;


.left{  width:50vw;
  margin-top:3%;

}

.right{
   
    width:30vw;
    margin-top:15%;
    margin-left:0%;
    text-align: right;
    }
img{
 

   max-width:90%;
  
 
}
@media only screen and (max-width:600px) {
.left{ 
 
     width:100vw;
    
    }

.right{
    width:90vw;
    padding:1em;
    margin-left:4%;
  
    
    }

img{

  
    margin-top: 0;
    margin-left: 0; 
}
.wrap{
    flex-wrap:wrap;
}
            
}
`

export default About;