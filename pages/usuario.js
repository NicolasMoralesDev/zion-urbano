import React, { useEffect, useState } from "react";
import Layout from '../components/Layout'
import Head from 'next/head'
import LoginScreen from "../pages/login";
import { admiProductosFetch } from '../helper/fetchAdmi';
import Admi from "../components/Admi";


const Usuario = (props) => {

    const [isLogued, setIslogued] = useState();
    const [datas, setDatas] = useState(props.data);


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
                    {isLogued ? <Admi productos={datas} /> : <LoginScreen />}
                </main>
            </Layout>
        </>
    );
};

export default Usuario;


export const getStaticProps = async () => {
    return {
      props: {
        title: 'hola',
        data: await admiProductosFetch(),
      },
    };
  }