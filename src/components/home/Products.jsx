/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Star } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    const data = useLoaderData()
    const ProductData = data.data;
    return (
        <div className='max-w-screen-2xl mx-auto grid grid-cols-4 gap-10'>
            {
                ProductData.map((item) => (
                    <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-500 relative flex flex-col gap-4 rounded-xl cursor-pointer'>
                        <div className='w-full h-auto flex items-center justify-center px-4'>
                            <img className="w-52 h-64 object-contain imgHover" src={item.image} alt="" />
                        </div>
                        <div className='px-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-titleFont tracking-wide text-lg text-app_blue font-medium'>{item.title.substring(0, 20)}</h2>
                                <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
                            </div>
                            <div>
                                <p className='text-sm mb-2'> {item.description.substring(0, 100)}...</p>
                                <div className='text-yellow-500'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>
                            <button className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md mt-3 Hover'>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products