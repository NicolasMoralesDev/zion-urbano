import React, { useState }  from 'react'
import Card from 'react-bootstrap/Card';

const Productos = (props) => {
  
  const articulos = props.card.filter(datos => datos.categoria.nombre == props.titulo);

  const consulta = (producto)=>{
   window.location=`https://api.whatsapp.com/send?phone=541165759558&text=!Hola%C2%A1%20%F0%9F%98%80%20Acabo%20de%20visitar%20tu%20catalogo%20web%20y%20quer%C3%ADa%20consultarte%20sobre%20este%20articulo%20${producto}%20%F0%9F%98%84`;
  };

  const  [productos, setProductos] = useState(articulos);

  return(
    <>
  <div className='row  catalogo_container'>
    <h5 className='text-left titulo-categoria'>{props.titulo}:</h5>
     { productos.map(element => {
          
          return (
            
            <Card id='card-estilo' className='card' style={{ width: '18rem' }}>
            <img variant="top" src={element.img} />
            <Card.Body>
              <Card.Title>{element.nombre}</Card.Title>
              <Card.Text>
              {element.descripcion}
              </Card.Text>
              <h3 className='precio-card'>${element.precio}</h3>

              <button className="custom-btn btn-12"  role="link" onClick={()=> consulta(element.nombre)}><span>Click!!</span><span>Pregunta!</span></button>
            </Card.Body>
          </Card>
          )     
          })} 
          </div>
          </>
          )
}

export default Productos;

