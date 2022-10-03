import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/products'

const Loading = () => {
    return (
        <strong className='m-8'>loading ...</strong>
    )
}

const Item = ({ item }) => {
    return (
        <div className='m-8'>
            <div>{item.Nombre}</div>
            <div>Price: {item.Precio}</div>
        </div>
    )
}


const ItemDetail = () => {

    const { id: itemId } = useParams()
    const [loading, setloading] = useState(true)
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetails().then(response => {
            setItem(response)
            setloading(false)
        })
    }, [])


    const getItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find(p => p.id === Number(itemId)))
            }, 3000);
        })
    }

    return (
        <>
            {loading ? <Loading /> : <Item item={item} />}
        </>
    )
}

export default ItemDetail