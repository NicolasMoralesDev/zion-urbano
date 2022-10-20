import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { deleteProduct } from '../helper/fetchAdmi';


const admi = (props) => {

  const [productos, setProductos] = useState(props.productos);

  const eliminarProducto = (e) =>{
    const producto = e.target.value;
    deleteProduct(producto);
  };

  return (
    <>
      <div className="container mt-5 mb-5">
      <h2 className="text-center mb-5">¡Bienvenida Yolanda!</h2>
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
            {productos.map(element => {
              return (
              <tr key={element._id}>
                <td>{element._id}</td>
                <td> <img src={element.img} alt={`producto - ${element.nombre}`} width={40} height={48} /></td>
                <td>{element.nombre}</td>
                <td>${element.precio}</td>
                <td className="w-25 text-center">
                  <Button value={element._id} onClick={ eliminarProducto} className="btn btn-danger">Eliminar</Button>
                  <Button value={element._id} className="btn btn-success">Modificar</Button>
                </td>
              </tr>
              )
            })}

          </tbody>
        </Table>
      </div>
    </>
  )
}

export default admi;
