import React from 'react'
import { ProductosContext } from './ProductosContext'
import {useEffect, useState } from 'react'

//debe escuchar los children
export const ProductosProvider = ({children}) => {

    const [produtos, setProductos] = useState([])
    
        const obtenerProductos = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                console.log(data)
                
                if (data.length > 0) setProductos(data)
    
            } catch (error) {
                console.error(`Se ha presentado un error ${error}`)            
            }        
        }
    
        useEffect(() => {
            obtenerProductos()
    
        }, [])

  return (
    <ProductosContext.Provider value={{produtos}}>
        {children}
    </ProductosContext.Provider>
  )
}
