import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext)

    const calcularTotal = () => {
        /*const subTotales= carrito.map((prod) => prod.price * prod.counter);
        let total = 0;
        subTotales.map((subTotal) => total += subTotal);*/

        let total = 0;
        carrito.map((prod) => total += prod.price * prod.counter)
        return total;
    }

    if (carrito.length === 0) {
        return (
            <div className="container my-5">
                <h2>No hay items agregados</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">    
            <h2>CartView</h2>
            <hr/>
            <section>

                {
                    carrito.map((prod) => <CartItem key={prod.id} {...prod}/>)
                }
            </section>
            <section>
                <h2>Total: {calcularTotal()}</h2>
            </section>
            <hr/>
            <div>
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link to="/Checkout" className="btn btn-success">Finalizar mi Compra</Link >
            </div>
        </div>
    )
}
