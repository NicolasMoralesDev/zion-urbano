import React, { useEffect, useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productosFetch } from '../helper/fetchProductos';


const Productos = (props) => {
  
  const  [productos, setProductos] = useState(props.data);


  return(
    <>
  <div className='row  catalogo_container'>
    <h5 className='text-left titulo-categoria'>{props.titulo}:</h5>
    { categoria.map(element => {
          
          return (
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
          )
          
          })}      
          </div>
          </>
          )
}

export default Productos;

export  const getStaticProps = async () =>{
  return{
  props:{
    title: 'hola',
    data: await  productosFetch(),
  },
  };
}