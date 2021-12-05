import React, { useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const ItemDetail = ({id, img, name, price, desc, disponible}) => {

    const[agregado, setAgregado] = useState(false);

    const respuesta = () => {
        console.log(`Item agregado: `,
            id,
            name,
            price
        );
        setAgregado(true);
    }

    return (
        <div key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: $ {price}</p>
                <p className="card-text">{desc}</p>
            {
                !agregado
                ? <ItemCount disponible={disponible} />
                : <Link to="/cart" className="btn btn-success">Finalizar Compra</Link>
            }
            </div>
            <Button variant="primary" size="lg" onClick={respuesta} >Agregar</Button>

        </div>
    )
}
