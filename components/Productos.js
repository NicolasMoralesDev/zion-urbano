import React, { useEffect, useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Productos = (props) => {
  
  const articulos = props.card.filter(datos => datos.categoria.nombre == props.titulo);
  
  const  [productos, setProductos] = useState(articulos);

  return(
    <>
  <div className='row  catalogo_container'>
    <h5 className='text-left titulo-categoria'>{props.titulo}:</h5>
     { productos.map(element => {
          
          return (
            
            <Card id='card-estilo' style={{ width: '18rem' }}>
            <img variant="top" src={element.img} />
            <Card.Body>
              <Card.Title>{element.nombre}</Card.Title>
              <Card.Text>
              {element.descripcion}
              </Card.Text>
              <h3>${element.precio}</h3>
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

