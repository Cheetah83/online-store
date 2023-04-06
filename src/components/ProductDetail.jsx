import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '../slices/productsApi'


const ProductDetail = () => {
  const { id } = useParams();
  const[product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
        .then((getData) => {
            setProduct(getData.data);
        })
    })
  return (
    <h1>single{id}</h1>
  )
}

export default ProductDetail