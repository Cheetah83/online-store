import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CardDetails from './CardDetails'

const Products = () => {
    const[products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://642e447c8ca0fe3352cbfd27.mockapi.io/crud")
        .then((getData) => {
            setProducts(getData.data);
        })
    })
  return (
    <>
      <div className="row row-cols-3 row-cols-md-3 g-4">
            {products.map( x => (
                <CardDetails key={x._id} {...x} />
            ))}
        </div>
    </>
  )
}

export default Products