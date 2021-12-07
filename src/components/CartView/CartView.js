import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            

            {
                carrito.lengt > 0
                ?   <>

                        <h2>CartView</h2>
                        <hr/>

                        <section>

                            {
                                carrito.map((prod) => <CartItem {...prod}/>)
                            }


                        </section>
                        <hr/>
                        <div>
                            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                            <button className="btn btn-success">Finalizar mi Compra</button>
                        </div>
                    </>
                :   <>
                        <h2>No hay items agregados</h2>
                        <hr/>
                        <Link to="/" className="btn btn-primary">Volver</Link>
                    </>
            }


        </div>
    )
}
