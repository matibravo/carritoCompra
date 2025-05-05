import React from 'react'
import { NavBar } from './components/NavBar'
import { Routes, Route } from 'react-router'
import { CarritoPages } from './pages/CarritoPages'
import { ComprasPage } from './pages/ComprasPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'


export const CarritoApp = () => {

    //productos provider provee a todos los componentes hijos el valor de productos para que los usen
  return (
    <ProductosProvider>
        <CarritoProvider>
            <NavBar></NavBar>
            <div className="container">
                <Routes>
                    <Route path="/" element={<CarritoPages/>}></Route>
                    <Route path="/carrito" element={<ComprasPage/>}></Route>
                    {/* <Route path="*" element={<Navigate to='/' />}></Route>  */}
                </Routes>
            </div>
        </CarritoProvider>
    </ProductosProvider>    
  )
}
