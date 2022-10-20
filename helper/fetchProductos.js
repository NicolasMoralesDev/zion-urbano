import axios from 'axios'

 const url = axios.create( {
    baseURL:"https://zion-backend-a.herokuapp.com/api",
});

export const productosFetch = async () =>{
    const mercaderia = await url.get(`/productos`);
    return mercaderia.data.productos
};

export const categoriasFetch = async () =>{
    const response = await url.get(`/categorias`);
    return response.data.categorias
};

