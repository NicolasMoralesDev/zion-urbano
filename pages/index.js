import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Productos } from '../helper/fetchProductos';


export default function Home() {

  const  [articulo, setArticulo] = useState([])

  const traerArticulos = async ()=>{
    const data = await  Productos();  
    setArticulo(data)
  }
  
console.log(articulo)
  useEffect(() => {
   traerArticulos()  
  }, [])
  
  return (
    <>
      <Head>
        <title>catalogo</title>
      </Head>
      <Layout>
        <div className='container-fluid  background-catalogo '>
          <h2 className='text-center titulo-productos'>Nuestros Productos:</h2>
          <div className='row containerfluid catalogo_container'>
            <Card id='card-estilo' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">contactate!</Button>
              </Card.Body>
            </Card>
    
          </div>
        </div>
      </Layout>
    </>
  )
}
