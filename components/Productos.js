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
              <h3 className='precio-card'>${element.precio}</h3>

              <button className="custom-btn btn-12"><span>Click!!</span><span>Pregunta!</span></button>
            </Card.Body>
          </Card>
          )     
          })} 
          </div>
          </>
          )
}

export default Productos;

