import React, { useContext } from 'react'
import { Cards } from '../components/Cards'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

//mostrar productos
export const ComprasPage = () => {

    const { produtos } = useContext(ProductosContext)
    const {listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad} = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }

    const handleQuitar = (id) => {
        eliminarCompra(id)        
    }

    const handleAumentar = (id) => {
        
    }

    const handleDisminuir = (id) => {
        
    }

  return (
    <>
        <h1>Lista de productos</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
            {
                produtos.length > 0 ? 
                (
                    produtos.map(producto => (
                        <Cards 
                            key={producto.id}
                            imagen={producto.image}
                            titulo={producto.title}
                            descripcion={producto.description}
                            precio={producto.price}
                            handleAgregar={() => handleAgregar(producto)}
                            handleQuitar={() => handleQuitar(producto.id)}/>
                    ))
                    
                ) : 
                (
                    <p>No existen productos disponibles</p>
                )
            }
        </div>
    </>
  )
}
