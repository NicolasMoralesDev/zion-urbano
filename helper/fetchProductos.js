import axios from 'axios'

 const url = axios.create( {
    baseURL:"https://zion-backend-a.herokuapp.com/api",
});

export const productosFetch = async () =>{
    const mercaderia = await url.get(`/productos?limite=0&desde=0`);
    return mercaderia.data.productos
};

export const categoriasFetch = async () =>{
    const response = await url.get(`/categorias?limite=0&desde=0`);
    return response.data.categorias
};

