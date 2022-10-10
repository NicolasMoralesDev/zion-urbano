import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

const login = () => {
  return (
    <>
    <Head>
        <title>login</title>
    </Head>
    <Layout>
    <div className="text-left container-fluid mt-5 mb-5  justify-content-center form_container">
    <h2>iniciar sesion</h2>
  <Formik>  
  <Form>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>correo</Form.Label>
        <Form.Control type="email" placeholder="ingrese su correo" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>usuario</Form.Label>
        <Form.Control type="text" placeholder="ingrese su usuario" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="ingrese su contraseña" required />
      </Form.Group>
      <Button variant="success" type="submit">
        entrar
      </Button>
      
    </Form>
    </Formik>
    </div>
    </Layout>
    </>
  )
}

export default login