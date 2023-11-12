/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { CompareArrowsRounded, Favorite, RemoveRedEyeRounded, ShoppingCart, Star } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/appSlice'









const Products = () => {
    const dispatch = useDispatch()

    const data = useLoaderData()
    const ProductData = data.data;
    return (
        <div className='max-w-screen-5xl max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-4 backDrop'>

            {
                ProductData.map((item) => (
                    <Tooltip top title={item.category} placement="top" className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-500 relative flex flex-col gap-4 rounded-xl cursor-pointer' arrow>
                        <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-500 relative flex flex-col gap-4 rounded-xl cursor-pointer pb-4 backDrop'>

                            {/* <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-400'>{item.category}</span> */}

                            <div className='w-full h-auto flex items-center justify-center px-4 relative group imgHover'>
                                <img className="w-52 h-64 object-contain  imgHover" src={item.image} alt="" />
                                <ul className='w-full h-36 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-4 border-1 border-r group-hover:bottom-0 duration-700'>
                                    <li className="productLi Hover top-0">
                                        <span >
                                            <Tooltip top title="Compare" placement="left" arrow>{""}<CompareArrowsRounded /></Tooltip>
                                        </span>
                                    </li>
                                    <li className="productLi Hover top-9">
                                        <span >
                                            <Tooltip top title="Favorite" placement="left" arrow>{""}<Favorite /></Tooltip>
                                        </span>
                                    </li>
                                    <li className="productLi Hover bottom-10">
                                        <span >
                                            <Tooltip top title="Product View" placement="left" arrow>{""}<RemoveRedEyeRounded /></Tooltip>
                                        </span>
                                    </li>
                                    <li className="productLi Hover bottom-1">
                                        <span >
                                            <Tooltip top title="Cart" placement="left" arrow>
                                                {""}<ShoppingCart />
                                            </Tooltip>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className='px-4 z-10 bg-white'>
                                <div className='flex items-center justify-between'>

                                    <Tooltip top title={item.title} placement="top" className='font-titleFont tracking-wide text-lg text-app_blue font-semibold' arrow>{""}<h2>{item.title.substring(0, 20)}</h2></Tooltip>


                                </div>
                                <div>

                                    <Tooltip top title={item.description} placement="top" className='text-xs mb-8 text-gray-500 mt-2' arrow>
                                        <p > {item.description.substring(0, 80)}  . . .</p>
                                    </Tooltip>
                                    <div className=' flex items-center justify-between '>
                                        <div className='text-yellow-500'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                        <div className='flex'>
                                            <p className='text-lg text-gray-600 font-semibold'>${item.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <button
                                        onClick={() => {
                                            dispatch(
                                                addToCart({
                                                    id: item.id,
                                                    title: item.title,
                                                    description: item.description,
                                                    price: item.price,
                                                    category: item.category,
                                                    image: item.image,
                                                    quantity: 1,
                                                })
                                            );
                                        }}
                                        className="w-full h-10 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md mt-3 shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            </div>
                        </div>
                    </Tooltip>

                ))
            }




        </div>
    )
}

export default Products