import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const Badge = () => {

  const {listaCompras} = useContext(CarritoContext)

  return (
    <button type="button" className="btn btn-outline-success position-relativ">
      🛒
      <span className="badge text-bg-success">
        {listaCompras.length}       
      </span>
    </button>
  )
}
