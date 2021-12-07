import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

  const [carrito, setCarrtito] = useState([]);
  const agregarAlCarrito = (item) => {
    setCarrtito( [...carrito, item] )
  }

  const removerDelCarrito = (id) => {
    setCarrtito( carrito.filter(prod => prod.id !== id ) )
  }

  const vaciarCarrito = () => {
    setCarrtito([])
  }

  const totalCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.counter, 0)
  }

  const totalCompra = () => {
    return carrito.reduce((acc, prod) => acc +prod.counter, 0)
  }

  const isInCart = (id) => {
    return carrito.some ( prod => prod.id === id )
  }

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            vaciarCarrito,
            totalCantidad,
            isInCart,
            totalCompra
        }}>
            {children}
        </CartContext.Provider>
    )
}