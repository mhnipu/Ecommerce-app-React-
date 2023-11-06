/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    const data = useLoaderData()
    const ProductData = data.data;
    return (
        <div>Products</div>
    )
}

export default Products