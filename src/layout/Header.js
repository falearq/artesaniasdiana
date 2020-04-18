import React from 'react'
import styled from 'styled-components';
import {Paleta} from '../Colors.js';
import logo from '../img/logo.svg';
import headermotive from '../img/headermotive.png';
import { NavLink,Link} from 'react-router-dom';

import About from '../pages/About';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


const Header = (props) => {
    return(
    <HeaderWrap>
    <Link to='/' ><img alt='Logotipo Artesanìas Diana'src={logo} height='80px'></img></Link>
        <nav>
          <ul style={{ }}>
            <li><NavLink activeClassName='activo' to="/" >Home</NavLink></li>
            <li><NavLink activeClassName='activo' to='/about'>¿Quiénes somos?</NavLink></li>
            <li><NavLink activeClassName='activo' to='/shop'>Tienda</NavLink></li>
             <li><NavLink activeClassName='activo' to='/faq'>FAQ</NavLink></li>
            <li><NavLink activeClassName='activo' to='/contact'>Contacto</NavLink></li>

          </ul>
        </nav>
        <img className='motive' alt='Motivo haciendo notar la división entre encabezado y contenido' src={headermotive}></img>
        </HeaderWrap>
        
        )        
    }
const HeaderWrap= styled.div`

font-family: 'MyWebFont', Caviar Dreams, sans-serif;
font-weight: bold;
background: ${Paleta.primarybg};
display: inline-flex;

color:${Paleta.primary};
padding: 1em;
width:100%;
position:fixed;
top:0;
left:0;
z-index:10;
transition: ease-in-out 1s;


img{
    margin-left:3%;

}
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
    height: 140px;
    width:600px;
   
}
nav>ul>li{
        
    display:inline;
    padding: 1em;
}

.motive{

position: absolute;
margin-top:6em;
height:36%;
margin-left: 1.2%;


}
.activo{
    text-decoration:underline;
}
`
export default Header;