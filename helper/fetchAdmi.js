import axios from 'axios'

 const url = axios.create( {
    baseURL:"https://zion-backend-a.herokuapp.com/api",
});
const urlBase = 'https://zion-backend-a.herokuapp.com/api';

export const admiProductosFetch = async () =>{
    const mercaderia = await url.get(`/productos`);
    return mercaderia.data.productos
};

export const deleteProduct = async (id) =>{
    const mercaderiaBorrar = await fetch(`${urlBase}/productos/${id}`,
    {
        method:"DELETE",
        headers: {
            "Content-type":"application/json; charset=UTF-8",
            Authorization: JSON.parse(localStorage.getItem('token')),
        },
    }
    );

    location.reload();
};

export const editProduct = async ( producto ) =>{
    const response = await fetch(`${urlBase}/productos/${producto._id}`,
    {
        method:"PUT",
        body: JSON.stringify({
        img: producto.img,
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion ,
        }),
        headers: {
            "Content-type":"application/json; charset=UTF-8",
            Authorization: JSON.parse(localStorage.getItem("token")),
        },
    }
    );

    location.reload();

};