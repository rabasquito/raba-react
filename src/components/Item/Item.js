import React from 'react'
import { Link } from 'react-router-dom'
export const Item = ({ id, name, img, price, desc }) => {
    return (
        <article key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: $ {price}</p>
                <p className="card-text">{desc}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Ver Detalle de Producto</Link>
            </div>
        </article>
    )
}
