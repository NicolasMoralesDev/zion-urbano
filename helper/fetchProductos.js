import axios from 'axios'

 const url = axios.create( {
    baseURL:"https://zion-backend-a.herokuapp.com/api",
});

export const Productos = async () =>{
    const mercaderia = await url.get(`/productos`);
    console.table(mercaderia.data.productos)
    return mercaderia.data.productos
};



console.log(Productos())