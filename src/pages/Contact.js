import React from 'react';
import Header from '.././layout/Header';
import contact from '../img/contact.png';
import styled from 'styled-components';
import {Paleta} from '../Colors.js';
import {Formik} from'formik'; 



const Contact = () => {
    return(
    <div>
      <Header/>
     <ContactWrap>
      
        <div className='left'>
          <img alt='Imagen de about de artesanías de Artesanías Diana'src={contact}></img>
        </div>
        <div className='right'>
           <Formik classname='formik' initialValues={{ email: '', text: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Requerido';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Dirección de email incorrecta';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <h1>Contacto</h1>
          <br></br>
          <h2>E-mail</h2>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          
          {errors.email && touched.email && errors.email}
          <br></br>
          <h2>Mensaje</h2>
          <input
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          {errors.text && touched.text && errors.text}
          <br></br>
          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      )}
    </Formik>
        </div>
        </ContactWrap>
    </div>
    )
}
const ContactWrap= styled.div`
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
    margin-top:5%;
    margin-left:0%;
    text-align: right;
    
    }
img{
 

   max-width:80%;
  
 
}
button{
  background-color: ${Paleta.primary};
  color:white;
  border-radius:3em;
}
input{
  border-radius:3em;
  height:3em;
  padding:1em;
  box-shadow: none;
}
input[type='text']{
  
  height:8em;

}
form{
  padding:1em;
  width:80%;
}
@media only screen and (max-width:600px) {
.left{ 
 
     width:100vw;
    
    }

.right{
    width:90vw;
    padding:1em;
    margin-left:10%;
  
    
    }

img{

  
    margin-top: 0;
    margin-left: 0; 
}
.wrap{
    flex-wrap:wrap;
}
input{
  border-radius:3em;
  height:3em;
  padding:1em;
  box-shadow: none;
  width:20em;
}
input[type='text']{
  
  height:8em;

}
            
}
`


export default Contact;