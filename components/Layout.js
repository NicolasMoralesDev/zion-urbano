import React, { Children } from 'react'
import Navegacion from '../components/Navegacion'
import Pie from '../components/Pie'
import Encabezado from './Encabezado'

const layout = ({children}) => {
  return (
    <>
    <Encabezado/>
    <Navegacion/>
    {children}
    <Pie/>
    </>
  )
}

export default layout