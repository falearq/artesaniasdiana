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
    console.log(notaBlog)
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
        
            <h1>{notaBlog.fields.titulo}</h1>
            <ImgWrap>
                            <img src={notaBlog.fields.imagenDestacada.fields.file.url} alt=""/>
            </ImgWrap>
            <div
                dangerouslySetInnerHTML={
                    {__html:crearHTML(notaBlog.fields.content)}
                }
            >
            </div>
        </Wrap>
    )
}

const Wrap  = styled.section`
font-family: 'MyWebFont', Caviar Dreams, sans-serif;
font-weight: bold;
background: ${Paleta.primarybg};
color:${Paleta.primary};
margin-top:20vh;
height:80vh;


display:flex;
flex-wrap:wrap;
h1{
    margin-top:5vh;
    margin-left:5vw;
}
img{
      display:flex;
    justify-content:center;
    align-items:center;
    max-width:70%;
  
        
    }
`
const ImgWrap = styled.div`

    height: 60%;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`;

export default Nota;