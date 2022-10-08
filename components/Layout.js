import React, { Children } from 'react'
import Navegacion from '../components/Navegacion'
import Pie from '../components/Pie'

const layout = ({children}) => {
  return (
    <>
    <Navegacion/>
    {children}
    <Pie/>
    </>
  )
}

export default layout