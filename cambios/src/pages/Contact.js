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
           <Formik initialValues={{ email: '', mensaje: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
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
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
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
height:100vh;
width:100vw;

display:flex;
flex-wrap:wrap;


.left{  width:50%;
margin-top:15em;
}

.right{
   
    width:30%;
    margin-top:15em;
    text-align: right;
    }
img{
  repeat: no-repeat;
  margin-left:7em;
   height:350px;
  
 
}
`

export default Contact;