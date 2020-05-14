import React from 'react'
import styled from 'styled-components';
import {Paleta} from '../Colors.js';
import logo from '../img/logo.svg';
import headermotive from '../img/headermotive.png';
import { NavLink,Link} from 'react-router-dom';
import botonmenu from '../img/botonmenu.svg';
import botonmenuhover from '../img/botonmenuhover.svg';
import botonmenuclose from '../img/botonmenuclose.svg';
import botonmenuclosehover from '../img/botonmenuclosehover.svg';


const Header = (props) => {
    return(
    <HeaderWrap>
        <Link to='/' ><img alt='Logotipo Artesanìas Diana'src={logo} height='80px'></img></Link>
        <img className='motive' alt='Motivo haciendo notar la división entre encabezado y contenido' src={headermotive}></img> 
        
        <input type="checkbox" id="activadorMenu"></input>
        <label className="trans" htmlFor="activadorMenu" id="botonMenu"></label>
        
        <nav>
          <ul style={{ }}>
            <li><NavLink activeClassName='activo' to="/" >Home</NavLink></li>
            <li><NavLink activeClassName='activo' to='/about'>¿Quiénes somos?</NavLink></li>
            <li><NavLink activeClassName='activo' to='/shop'>Tienda</NavLink></li>
             <li><NavLink activeClassName='activo' to='/faq'>FAQ</NavLink></li>
            <li><NavLink activeClassName='activo' to='/contact'>Contacto</NavLink></li>

          </ul>
        </nav>
        
        </HeaderWrap>
        
        )        
    }
const HeaderWrap= styled.div`

font-family: 'MyWebFont', Caviar Dreams, sans-serif;
font-weight: bold;
background-color: ${Paleta.primarybg};
display: grid;
color:${Paleta.primary};
padding: 1em;
width:100vw;
height: 8em;
position:fixed;
top:0;
left:0;
z-index:10;




nav>ul>li>a{
    text-decoration: none;
    color:${Paleta.primary};
   
}
nav>ul>li>a:hover{
  color:${Paleta.secondary};
  transition: ease-in-out 1s;

}

nav{
    position:fixed;
    margin-top: 2.5em;
    right: 0;
    
    width:600px;
   
}
nav>ul>li{
   
        
    display:inline-flex;
    padding: 1em;
}

.motive{

margin-top:2%;
display:flex;
width:100%;




}
.activo{
    text-decoration:underline;
}
  #activadorMenu{
	display: none;
	
}

@media only screen and (max-width:790px) {
  nav {
    background-color: ${Paleta.primarybg};
		
		width: 8em;
    right: -8em;
    z-index:1;
  }
  nav>ul>li{
    background-color: ${Paleta.primarybg};
    padding: .8em;
  }

  #activadorMenu{
	display: none;
	
}

#botonMenu{
  
  background-image: url(${botonmenu});
	background-position: center;
  background-repeat: no-repeat;
  background-size:50%;
	height: 6em;
	position: fixed;
	top: 0;
	right: 0;
  width: 6em;
  z-index:1;

}

#botonMenu:hover{
  background-image: url(${botonmenuhover});
  z-index:1;
}

 #activadorMenu:checked + #botonMenu{
	background-image: url(${botonmenuclose});
  z-index:1;

}

 #activadorMenu:checked + #botonMenu:hover{
  background-image: url(${botonmenuclosehover});
	
}

 #activadorMenu:checked + #botonMenu + nav{
	right: 0;

}}           
        
`
export default Header;