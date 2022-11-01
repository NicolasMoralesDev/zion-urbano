import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { editCategoria } from "../helper/fetchAdmi";
import { categoriasFetch } from "../helper/fetchProductos";

const ModalEditarCategoria = (props) => {

    const { handleEditarCategoria, editarCategoria } = props;
    const [traerCategoria, setTraerCategoria] = useState([]);


    const Categorias =  async () => {
        const response = await categoriasFetch()
        const categoria = setTraerCategoria(response)
        return categoria
    };

    useEffect(() => {
        Categorias()
    }, [])
    

    const [categoriaEdit, setCategoriaEdit] = useState({
        _id: "",
        nombre: "",
    });

    const handleCategoria = (e) => {
        const { name, value } = e.target;
        setCategoriaEdit((prevState) =>
            ({ ...prevState, [name]: value }));
            console.log(categoriaEdit)
    };


    return (

        <Modal show={editarCategoria} onHide={handleEditarCategoria} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Categoria:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCateg">
                        <Form.Label id="_id">Categoria:</Form.Label>

                        <select
                            id="_id"
                            name="_id"
                            onChange={handleCategoria}
                        >
                            <option>Seleccione una categoria:</option>
                            {traerCategoria.map((element) => {
                                return <option value={element._id} key={element._id}>{element.nombre}</option>;
                            })}
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control name='nombre' value={categoriaEdit.nombre} onChange={handleCategoria} type="text" placeholder="Ingrese el nombre" required />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleEditarCategoria}>
                    cancelar
                </Button>
                <Button variant="success" onClick={() => editCategoria(categoriaEdit)}>
                    editar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditarCategoria;