import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


const admi = () => {
  return (
    <>
    <Head>
        <title>administrador</title>
    </Head> 
    <Layout>
     <div className="container mt-5">
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>$</td>
          <td className="w-25 text-center"> 
          <Button class="btn btn-danger">Eliminar</Button>
          <Button class="btn btn-success">Modificar</Button>
         </td>
        </tr>
      </tbody>
    </Table>
    </div>
    </Layout>
    </>
  )
}

export default admi