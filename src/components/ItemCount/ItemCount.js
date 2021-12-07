import React from 'react'
import {Button} from 'react-bootstrap'

export const ItemCount = ({disponible, counter, setCounter, onAdd}) => {

    const incrementar = () => {
        if(disponible>counter) {
            setCounter(counter+1);
        } else {
            alert("No hay más stock de este producto!");
        }
    }

    const decrementar = () => {
        if (counter>1) {
            setCounter(counter-1);
        } else {
            alert("No se puede disminuir más!");
        }
    }
    
    
    
    return (
        <div>
           <div>
               <Button variant="primary" onClick={decrementar} >-</Button>
                <span className="mx-2">{counter}</span> 
               <Button variant="primary" onClick={incrementar} >+</Button>
               <br/>
               <button className="btn btn-success" onClick={onAdd}>
                   Agregar al carrito
               </button>
           </div>
           
        </div>
    )
}
