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
          <br></br>
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

}

.right{
  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items:center;
  text-align:center;
    width:50%;
    margin-top:9%;
    gap: 3em;
    
    
    }
img{
 

   max-width:90%;
  
 
}
p{
  
  width: 50%;
}

img{
 

   max-width:80%;
  
 
}
button{
  background-color: ${Paleta.primary};
  color:white;
  border-radius:3em;
  height:3em;
  width:10em;
}
input{
  border-radius:3em;
  border:none;
  height:3em;
  padding:1em;
  width:20em;
}
input[type='text']{
  
  height:8em;

}
form{
  
  width:80%;
}
@media only screen and (max-width:790px) {
  flex-flow:column;
  margin-top:20vh;
.left{ 
 
     width:100%;
    
    }

.right{
    width:100%;
    padding:1em;
    margin-left:4%;

  
    
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