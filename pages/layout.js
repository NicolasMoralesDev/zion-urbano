import React, { Children } from 'react'
import Navegacion from '../components/Navegacion'
import Pie from '../components/Pie'

const layout = ({Children}) => {
  return (
    <>
    <Navegacion/>
    {Children}
    <Pie/>
    </>
  )
}

export default layout