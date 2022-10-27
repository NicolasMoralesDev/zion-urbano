import Image from 'next/image'
import React from 'react'

const Encabezado = () => {
  return (
    <div className="   d-flex justify-content-center align-content-center p-3 container-fluid text-light bg-dark">
    <img src='logo.jpg' className='h-25 ' alt="Logo" width={80} height={50} />
    <h1 className='text-center  media-queri   encabezado'>Zion</h1>
    <h1 className='text-center  media-queri  encabezado'>Urbano</h1>
    </div>
  )
}

export default Encabezado;