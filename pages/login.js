import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const login = () => {
  return (
    <>
    <Head>
        <title>login</title>
    </Head>
    <Layout>
    <div className="text-left container-fluid mt-5 mb-5 w-50 justify-content-center">
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>correo</Form.Label>
        <Form.Control type="email" placeholder="ingrese su correo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>usuario</Form.Label>
        <Form.Control type="text" placeholder="ingrese su usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="ingrese su contraseña" />
      </Form.Group>
      <Button variant="success" type="submit">
        entrar
      </Button>
    </Form>
    </div>
    </Layout>
    </>
  )
}

export default login