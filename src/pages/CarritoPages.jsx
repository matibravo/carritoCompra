import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { NavLink } from 'react-router-dom'

export const CarritoPages = () => {

    const {listaCompras, eliminarCompra, aumentarCantidad, disminuirCantidad} = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const handlePrint = () => {
        print()
    }

  return (
    <>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaCompras.length > 0 ? (
                        listaCompras.map(articulo => (
                            <tr key={articulo.id}>
                                <th scope="row">{articulo.title}</th>
                                <td>{articulo.price}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => disminuirCantidad(articulo.id)}>
                                            -
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary">
                                            {articulo.cantidad}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn btn-outline-secondary"
                                        onClick={() => aumentarCantidad(articulo.id)}>
                                            +
                                    </button>                                    
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => eliminarCompra(articulo.id)}>
                                        Eliminar producto
                                    </button>
                                </td>               
                            </tr>
                        ))
                       
                    ) : (
                        <tr>
                            <td>
                                <p>No has agregado productos a tu carrito de compras.</p>
                            </td>
                        </tr>
                    )
                } 
                <tr>
                    <td></td>
                    <td>
                        <b>Total: </b>
                    </td>
                    <td>${calcularTotal()}</td>
                </tr>
            </tbody>
            </table>                    
            
        <div className="d-grid gap-2">
            { listaCompras.length > 0 ? (
                <button 
                    className="btn btn-primary"
                    onClick={handlePrint}>
                    Comprar
                </button>
            ) : (
                <NavLink to="/carrito" className="btn btn-success">Explorar productos</NavLink>
            )}
            
        </div> 
    </>
  )
}
