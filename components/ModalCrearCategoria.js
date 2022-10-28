import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createCategoria } from '../helper/fetchAdmi';

const ModalCrearCategoria = (props) => {

    const {handleCerrarCategoria, crearCategoria} = props;

    const [categoriaCreada, setcategoriaCreada] = useState({
        nombre:'',
    });

    const handleCategoria = (e) => {
        const { name, value } = e.target;
        setcategoriaCreada((prevState) =>
    ({ ...prevState, [name]: value }));
    };

    return (
        <Modal show={crearCategoria} onHide={handleCerrarCategoria} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Categoria:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control name='nombre' onChange={handleCategoria} type="text" placeholder="Ingrese el nombre" required />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleCerrarCategoria}>
                    cancelar
                </Button>
                <Button variant="success" onClick={() => createCategoria(categoriaCreada)}>
                    Crear
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCrearCategoria