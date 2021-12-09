import React, { useState, useContext } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = ({id, img, name, price, desc, disponible}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    const [counter, setCounter] = useState(1)

    const respuesta = () => {
        agregarAlCarrito({
            id,
            name,
            price,
            img,
            counter
        });
    }

    return (
        <div key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: $ {price}</p>
                <p className="card-text">{desc}</p>
            {
                !isInCart(id)
                    ? <ItemCount 
                        disponible={disponible} 
                        counter={counter} 
                        setCounter={setCounter} 
                        onAdd={respuesta} 
                    />
                    : <Link to="/cart" className="btn btn-success">Finalizar Compra</Link>
            }
            </div>

        </div>
    )
}
