import Image from 'next/image'
import React from 'react'

const Encabezado = () => {
  return (
    <div className=" d-flex justify-content-center p-3 container-fluid text-light bg-dark">
    <Image src='/vercel.svg' className='h-25' alt="Logo" width={40} height={48} />
    <h1 className='text-center m-2  encabezado'>Zion</h1>
    <h1 className='text-center m-2  encabezado'>Urbano</h1>
    </div>
  )
}

export default Encabezado;