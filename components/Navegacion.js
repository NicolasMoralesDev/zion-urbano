import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';


const Navegacion = () => {

  const [isLogued, setIslogued] = useState();

  useEffect(() => {
    const storage = localStorage.getItem('token');
    setIslogued(storage)
  }, [isLogued])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className='d-flex justify-content-center'>
          <Nav className="text-center">
            <Link href="/">
              <a className="nav-link" >catalogo</a>
            </Link>
            <Link href="/usuario">
              {isLogued ?
                <a className="nav-link"> administrador </a>
                : <a className="nav-link"> Login </a>}
            </Link>
            <Link href="/contacto">
              <a className='nav-link'> contacto </a>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegacion;