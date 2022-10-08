import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Table from 'react-bootstrap/Table';


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
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </Layout>
    </>
  )
}

export default admi