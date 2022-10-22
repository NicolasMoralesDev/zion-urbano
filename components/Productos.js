import React, { useState }  from 'react'
import Card from 'react-bootstrap/Card';
import Head from 'next/head'

const Productos = (props) => {
  
  const articulos = props.card.filter(datos => datos.categoria.nombre == props.titulo);
  const consulta = ()=>{
   window.location='http://es.stackoverflow.com';
  };
  const  [productos, setProductos] = useState(articulos);

  return(
    <>
    <Head>
    <script src="https://unpkg.com/scrollreveal"></script>
        <script src='../pages/js/scrollReveal.js'></script>
    </Head>
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

              <button className="custom-btn btn-12"  role="link" onClick={()=> consulta()}><span>Click!!</span><span>Pregunta!</span></button>
            </Card.Body>
          </Card>
          )     
          })} 
          </div>
          </>
          )
}

export default Productos;

