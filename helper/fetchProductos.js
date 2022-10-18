import axios from 'axios'

 const url = axios.create( {
    baseURL:"https://zion-backend-a.herokuapp.com/api",
});

export const productosFetch = async () =>{
    const mercaderia = await url.get(`/productos`);
    console.table(mercaderia.data.productos)
    return mercaderia.data.productos
};

export const categoriasFetch = async () =>{
    const response = await url.get(`/categorias`);
    console.table(response.data.categorias)
    return response.data.categorias
};

console.table(categoriasFetch())
