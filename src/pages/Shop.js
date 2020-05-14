import React from 'react';
import styled from 'styled-components';
import {useContentfulData} from '../Hooks/useContentfulData';
import { Link } from 'react-router-dom';
import Header from '../layout/Header'
import {Paleta} from '../Colors.js';

const Shop = () => {
    const [notasBlog, loadingNotasBlog] = useContentfulData('entradas')
    
    
    if(loadingNotasBlog){
        return( 
        <Wrap>
        <Header/>
        
        <h1>Cargando...</h1>
  
        </Wrap>)
    }
    return(
        <Wrap>
        <Header/>
    
            {notasBlog.items.map( nota =>{
               
                return(
                    <Articulo key={nota.sys.id}>
                        <ImgWrap>
                            <img src={nota.fields.imagenDestacada.fields.file.url} alt=""/>
                        </ImgWrap>
                        <h2>{nota.fields.titulo}</h2>
                        <hr/>
                        <p>{nota.fields.slug}</p>
                        <Link to={'/nota/'+ nota.sys.id} >Ver más</Link>
                    </Articulo>
                )
            })}
       
        </Wrap>
    )
}
const Articulo = styled.article`
 
    
    width: 30%;
    
    margin-right:3%;
    padding:1em;
    h2{
        margin-top:0;
        text-align:center;
        font-size:18px;
    }
    img{
      display:flex;
    justify-content:center;
    align-items:center;
    max-width:60%;
  
        
    }
    img:hover{ 
                    transform:scale(1.04);
            
                    -webkit-transition: all 1s ease-in-out;
                    -moz-transition: all 1s ease-in-out;
                    -ms-transition: all 1s ease-in-out;
                    -o-transition:all 1s ease-in-out;
                    transition:all 1s ease-in-out;
                }
    a{
        color:red;
        text-decoration:none;
        border: 1px solid #000;
        padding: 5px;
        border-radius: 3px;
        display:block;
        margin-top:1em;
        text-align:center
    }
    @media only screen and (max-width:600px) {
        width:80%;
        margin-left:10%;
    h2{
        margin-top:1em;
    }    
    }
`
const ImgWrap = styled.div`

    height: 60%;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    
`;


const Wrap  = styled.section`
    font-family: 'MyWebFont', Caviar Dreams, sans-serif;
font-weight: bold;
background: ${Paleta.primarybg};
color:${Paleta.primary};
margin-top:24vh;
height:80vh;


display:flex;
flex-wrap:wrap;
font-size:min(max(1em,2em)1em);
h1{
    margin-top:10vh;
    margin-left:5vw;
}
@media only screen and (max-width:600px) {
      margin-top:28vh;
    }
`

export default Shop;