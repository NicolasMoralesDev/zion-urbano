import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/login.css"
import "../styles/navegacion.css"
import "../styles/Productos.css"
import "../styles/admi.css"
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  return(
  <>
  <Head>
    <link rel="shortcut icon" href='favicon.jpg'/>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp;
