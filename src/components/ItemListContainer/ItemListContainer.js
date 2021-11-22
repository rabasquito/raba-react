import  React, {useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])


    useEffect(() => {
        setLoading(true)
        pedirDatos()
        .then( (resp) => {
           setProductos(resp)            
        })
        .catch( (error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    
    
    return (
        <div>
            {
                loading 
                ? <h2>Cargando..</h2> 
                : <ItemList productos={productos}/>
            }
            
        </div>
    )
}

