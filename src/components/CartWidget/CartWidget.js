import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {
    
    const {totalCantidad, carrito} = useContext(CartContext)

    return (
        <div className={carrito.length === 0 ? 'hidden' : ''}>
            <Link to="cart">
            <FaShoppingCart className="cartWidget" />
            <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}
