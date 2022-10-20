import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { deleteProduct, editProduct } from '../helper/fetchAdmi';


const admi = (props) => {

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const abrirCerrarModalEditar = () => {
    setShow(!show);
  };

  const [productos, setProductos] = useState(props.productos);
  const [productosEditados, setProductosEditados] = useState({
    _id: "",
    img: "",
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
  });

  const eliminarProducto = (e) => {
    const producto = e.target.value;
    deleteProduct(producto);
  };

  const actualizarProductos = (datos) => {
    abrirCerrarModalEditar();
    setProductosEditados(datos);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductosEditados((prevState) =>
      ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>id:</Form.Label>
              <Form.Control value={productosEditados._id} name="id" onChange={handleChange} type="string" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control value={productosEditados.nombre} name='nombre' onChange={handleChange} type="text" placeholder="Ingrese el nombre" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Precio:</Form.Label>
              <Form.Control type="number" name='precio' value={productosEditados.precio} onChange={handleChange} placeholder="ingrese el precio" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImg">

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCateg">

            </Form.Group>
            <Form.Label>Descripcion:</Form.Label>
            <Form.Group className="mb-3 m-3" controlId="formBasicText">
              <textarea name="descripcion" value={productosEditados.descripcion} onChange={handleChange} id="formBasicText" cols="55" rows="7" placeholder="Ingrese la descripcion" required></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            cancelar
          </Button>
          <Button variant="success" onClick={() => editProduct(productosEditados)}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ============================================================================== */}

      <div className="container mt-5 mb-5 " >
        <h2 className="text-center mb-5">¡Bienvenida Zulma!</h2>
        <Table   responsive striped bordered hover size="sm">
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
                    <Button value={element._id} onClick={eliminarProducto} className="btn btn-danger">Eliminar</Button>
                    <Button value={element._id} onClick={() => actualizarProductos(element)} className="btn btn-success">Modificar</Button>
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
