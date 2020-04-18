import React from 'react';
import styled from 'styled-components';
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
            <div>
            <Header/>
            <h1>Cargando ...</h1>
            </div>        
        )
    }
    const crearHTML = datos => documentToHtmlString(datos)
    return(
            
        <Wrap>
        <Header/>
        
            <h1>{notaBlog.fields.titulo}</h1>
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
    width:90%;
    margin:2em auto;
    margin-top:200px;
`
export default Nota;