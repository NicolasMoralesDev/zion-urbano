import React, { useState } from "react";
import { login } from "../helper/fetchAuth";
import Layout from '../components/Layout'
import Head from 'next/head'



const LoginScreen = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);


  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const datos = await login({ email, password });

    if (datos?.token) {
      localStorage.setItem("token", JSON.stringify(datos.token)); 

      console.log(datos.token);
      
      alert("Bienvenida Zulma")
    } else {
      if (datos?.errors) {
        setMessage(datos.errors);
      } else {
        setMessage([{ msg: datos.msg }]);
      }
    }
  };

  return (<>
     <Head>
        <title>Iniciar sesion</title>
      </Head>
      <Layout>
  <main className="login__main ">
    <div className="container container-login ">
      <div className="row login-cuerpo">
        <div className="col-12 col-md-12 col-sm-12   ">
          <div className="card estilo-card  ">
            <div  >
              <h3 className="text-center mb-4 texto-card">
             
                Iniciar sesión
              </h3>
              <form className="formulario-conte" onSubmit={handleSubmit}>
                <input
                  className="form-control mb-4 p-2 form-card"
                  type="email"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus={true}
                />
                <input
                  className="form-control mb-4 p-2 form-card"
                  type="password"
                  placeholder="ingrese constraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-flex justify-content-center my-3">
                  <button className="btn-card">Iniciar</button>
                </div>
                <div className="mb-3 text-center  text-secondary registrarse__link ">
                  
                </div>{message.length > 0 &&
                message.map((item, index) => (
                  <div key={index} className="login__alertas   alert alert-danger " role="alert">
                    {item.msg}
                  </div>
                
                  
                ))}
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div> 
     </main>
     </Layout>
      </>
  );
};

export default LoginScreen;