import React from 'react';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';
import {useOneContentfulData} from '../Hooks/useContentfulData';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import {useParams} from 'react-router-dom';
import Header from '.././layout/Header';
const Nota = () => {
    const id = useParams();
    const [notaBlog, loadingNotaBlog] = useOneContentfulData(id);
    
    if(loadingNotaBlog){
        return(
            <Wrap>
            <Header/>
            <h1>Cargando ...</h1>
            </Wrap>        
        )
    }
    const crearHTML = datos => documentToHtmlString(datos)
    return(
            
        <Wrap>
        <Header/>
        
            <div className='left'>
            <h1>{notaBlog.fields.titulo}</h1>
        
                            <img className='producto' src={notaBlog.fields.imagenDestacada.fields.file.url} alt=""/>
                            </div>
            <div className='right'
                dangerouslySetInnerHTML={
                    {__html:crearHTML(notaBlog.fields.content)}
                }
            >
            </div>
          
        </Wrap>
    )
}

const Wrap  = styled.section`
margin-top:30vh;

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
width:50%;
justify-content:center;
align-items:center;




}

.right{
    display:flex;
    flex-flow:column;
    align-items:center;
    margin-top:10em;
    width:50%;
    margin-right:10%;
 
  
    }
.producto{
    margin-top:2em;
  max-width:50% ;
  
}
@media only screen and (max-width:790px) {
    margin-top:15vh;
flex-flow:column;
.left{
  margin-top:10%;
  width:100%;
}
.right{
  width:100%;
}
}

`


export default Nota;