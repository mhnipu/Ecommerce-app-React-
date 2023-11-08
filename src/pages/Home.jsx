/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/home/banner'
import Products from '../components/home/Products'

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