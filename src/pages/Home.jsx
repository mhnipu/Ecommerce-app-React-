/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'
import { ShoppingCart } from '@mui/icons-material'
import { Alert } from '@mui/material'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='w-full -mt-5 xl:-mt-40 backdrop-blur-lg bg-opacity-80 py-10'>
                <Products />
            </div>

        </div>
    )
}

export default Home