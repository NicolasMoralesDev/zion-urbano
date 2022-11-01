import axios from 'axios'

const url = axios.create({
    baseURL: "https://zion-backend-a.herokuapp.com/api",
});
const urlBase = 'https://zion-backend-a.herokuapp.com/api';


export const admiProductosFetch = async () =>{
    const mercaderia = await url.get(`/productos?limite=0&desde=0`);
    return mercaderia.data.productos
};



export const deleteProduct = async (id) => {
    const mercaderiaBorrar = await fetch(`${urlBase}/productos/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem('token')),
            },
        }
    );
        alert("prenda Borrada correctamente");
    location.reload();
};

export const editProduct = async (producto) => {
    const response = await fetch(`${urlBase}/productos/${producto._id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                descripcion: producto.descripcion,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem("token")),
            },
        }
    );
        alert("prenda Modificada correctamente");
        location.reload()
    }
      
       


export const editCategoria = async (categoria) => {
    const response = await fetch(`${urlBase}/categorias/${categoria._id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                nombre: categoria.nombre,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem("token")),
            },
        }
    );
        alert("categoria Modificada correctamente");
   location.reload();

};

export const createProduct = async (productos) => {
    const response = await fetch(`${urlBase}/productos`,
        {
            method: "POST",
            body: JSON.stringify({
                id: productos._id,
                img: productos.img,
                nombre: productos.nombre,
                precio: productos.precio,
                categoria: productos.categoria,
                descripcion: productos.descripcion,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem("token")),
            },
        }
        
    ).then((response) => response.json());
    alert(" Nueva prenda Creada "); 
    location.reload()



};

export const createCategoria = async (productos) => {
    const response = await fetch(`${urlBase}/categorias`,
        {
            method: "POST",
            body: JSON.stringify({
                nombre: productos.nombre,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem("token")),
            },
        }
        
    ).then((response) => response.json());

    alert(" Nueva categoria Creada "); 
    location.reload()

};