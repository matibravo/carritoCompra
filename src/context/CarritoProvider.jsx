import React, { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

//aqui se debe utilizar el hook useReduce
const initialState = []

export const CarritoProvider = ({children}) => {
    
    const comprasReducer = (state= initialState, action= {}) => {
        switch (action.type) {
            case '[CARRITO] agregar compra':
                //spread operator para ver que es lo que tiene el arreglo inicial
                return [...state, action.payload]                
            case '[CARRITO] eliminar compra':
                //retorna las compras que son distintas al id que enviamos
                return state.filter(compra => compra.id !== action.payload)
                
            case '[CARRITO] aumentar cantidad':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return {...item, cantidad: cant}
                    return item
                })

            case '[CARRITO] disminuir cantidad':
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if (item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                    return item
                })
                
            default:
                return state;
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    //funciones de acciones en carrito para usar en useReducer
    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] agregar compra',
            payload: compra
        }
        dispatch(action)
    }

    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] eliminar compra',
            payload: id
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] aumentar cantidad',
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] disminuir cantidad',
            payload: id
        }
        dispatch(action)
    }

    

  return (
    <CarritoContext.Provider value={{listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad}}>
        {children}
    </CarritoContext.Provider>
  )
}
