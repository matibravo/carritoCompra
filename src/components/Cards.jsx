import React, { useState } from 'react'

export const Cards = ({imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir}) => {

    const [agregar, setAgregar] = useState(true)

    if (descripcion.length > 100) {
        descripcion = descripcion.slice(0, 100)
    }

    const handleCarrito = () => {
        //console.log(`agregar carrito: ${agregar}`)
        (agregar) ? handleAgregar() : handleQuitar()
        setAgregar(!agregar)
    }
    
  return (
    <div className="col">
        <div className="card p-3" style={{width: "18rem", height: "100%"}} >
                <img src={imagen} className="card-img-top" style={{maxHeight: "250px", objectFit: "cover"}} alt={titulo} />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="fw-bold text-primary">${precio}</p>

                    {
                        agregar ? (
                            <button 
                                className="btn btn-success"
                                onClick={handleCarrito}>
                                Agregar al carrito
                            </button>
                        ) : (
                            <button 
                                className="btn btn-danger"
                                onClick={handleCarrito}>
                                Eliminar del carrito
                            </button>
                        )
                    }                    
                </div>
        </div>
    </div>    
  )
}
