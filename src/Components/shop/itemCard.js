import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ id, Nombre, Precio }) => {
    return (
        <Link to={`/shop/item/${id}`}>
            <div className='m-5'>
                <div>{id}</div>
                <div>{Nombre}</div>
                <div>{Precio}</div>
            </div>
        </Link>
    )
}

export default ItemCard