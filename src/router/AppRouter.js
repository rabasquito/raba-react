
import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { CarouselContainer } from '../components/Carousel/CarouselContainer'
import { CartView } from '../components/CartView/CartView'
import { Checkout } from '../components/Checkout/Checkout'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer'

export const AppRouter = () => {
    
    const routes = useRoutes([
        {path: "/", element: <CarouselContainer/>},
        {path: "/productos/:catId", element: <ItemListContainer/>},
        {path: "/detail/:itemId", element: <ItemDetailContainer/>},
        {path: "/cart", element: <CartView />},
        {path: "/checkout", element: <Checkout/>},
        {path: "*", element: <Navigate to="/"/>}
    ])
    
    return routes
}
