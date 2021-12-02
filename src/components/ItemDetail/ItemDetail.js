import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {Button} from 'react-bootstrap'

export const ItemDetail = ({id, img, name, price, desc, disponible}) => {

    const respuesta = () => {
        console.log(`Item agregado: `,
            id,
            name,
            price
        );
    }

    return (
        <div key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: $ {price}</p>
                <p className="card-text">{desc}</p>
                <ItemCount disponible={disponible} />
            </div>
            <Button variant="primary" size="lg" onClick={respuesta} >Agregar</Button>
        </div>
    )
}
