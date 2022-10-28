import React, { useEffect, useState } from "react";
import Layout from '../components/Layout'
import Head from 'next/head'
import LoginScreen from "../pages/login";
import { admiProductosFetch } from '../helper/fetchAdmi';
import Admi from "../components/Admi";
import { categoriasFetch } from "../helper/fetchProductos";


const Usuario = (props) => {

    const [isLogued, setIslogued] = useState();
    const [datas, setDatas] = useState(props.data);
    const [categoria, setCategorias] = useState(props.categorias);



    useEffect(() => {
        const storage = localStorage.getItem('token');
        setIslogued(storage)
    }, [isLogued])


    return (
        <>

            {isLogued ?
                <Head>   <title>Administracion</title> </Head>
                : <Head> <title>Iniciar sesion</title></Head>
            }


            <Layout>
                <main>
                    {isLogued ? <Admi productos={datas} categ={categoria}/> : <LoginScreen />}
                </main>
            </Layout>
        </>
    );
};

export default Usuario;


export const getServerSideProps = async () => {
    return {
        props: {
            title: 'hola',
            data: await admiProductosFetch(),
            categorias: await categoriasFetch(),
        },
    };
}