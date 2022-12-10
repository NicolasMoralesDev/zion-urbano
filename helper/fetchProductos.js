import axios from 'axios'

 const url = axios.create( {
    baseURL:"https://zion-backend-2uq8un6gw-luci6611.vercel.app/api",
});

export const productosFetch = async () =>{
    const mercaderia = await url.get(`/productos?limite=0&desde=0`);
    return mercaderia.data.productos
};

export const categoriasFetch = async () =>{
    const response = await url.get(`/categorias?limite=0&desde=0`);
    return response.data.categorias
};

