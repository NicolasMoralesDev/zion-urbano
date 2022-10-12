import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA  from 'react-google-recaptcha';
import { Formik } from 'formik';

const contacto = () => {

  const captchas = () =>{

    console.log(9)
  };

  return (
    <>
    <Head>
        <title>contacto</title>
    </Head>
    <Layout>
    <div className="text-left container-fluid mt-5 mb-5 form_container justify-content-center">
    <h2>contactanos:</h2>
  <Formik>  
  <Form>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="ingresa tu correo" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="text" placeholder="ingresa tu nombre" required/>
      </Form.Group>
      <Form.Group className="mb-3 captcha"   >
      <ReCAPTCHA   onChange={captchas} sitekey="6Lc6rHciAAAAANehF2WcDx08s9XOEZaKV8WLHLLQ"/>
    </Form.Group>
      <Button variant="success" type="submit">
        enviar
      </Button>   
    </Form>
    </Formik>
    </div>
    </Layout>
    </>
  )
}

export default contacto;