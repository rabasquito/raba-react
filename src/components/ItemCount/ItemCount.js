import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

export const ItemCount = ({disponible}) => {
    const [counter, setCounter] = useState(1)

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
           <h2>{counter}</h2> 
           <div>
               <Button variant="primary" onClick={decrementar} >-</Button>
               <Button variant="primary" onClick={incrementar} >+</Button>
           </div>
           
        </div>
    )
}
