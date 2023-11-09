/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { Tooltip } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const products = useSelector((state) => state.appReducer.products);
    return (
        <div className="w-full bg-gray-200 p-4">
            <div className=" mx-auto h-auto grid grid-cols-5 gap-6">
                <div className="w-full h-full bg-white rounded-lg px-4 col-span-4 backDrop p-3">
                    <div className="font-titleFont flex items-center justify-between py-2 bg-gray-100 rounded-lg p-4 backDrop drop-shadow-lg" >
                        <h2 className="font-semibold text-2xl">Shopping Cart</h2>
                        <h4 className="text-lg text-gray-500">Subtitle</h4>
                    </div>
                    {/* Product starts here  */}
                    <div className="pt-4">
                        {
                            products.map((item) => (
                                <div key={item.id} className="w-full bg-gray-100 p-4 flex rounded-lg items-center gap-6 border-b-[1px] border-b-gray-300 ">
                                    <div className="w-full flex items-center justify-between gap-6 ">
                                        <div className="w-2/5 bg-white rounded-lg py-5 drop-shadow-lg ">
                                            <img className='w-full h-44 object-contain imgHover' src={item.image} alt="" />
                                        </div>
                                        <div className="w-3/5 mx-auto">
                                            <Tooltip top title={item.title} placement="bottom" className='font-titleFont pt-2 cursor-pointer font-semibold text-lg' arrow>
                                                <h2 className="text-2xl font-bold">
                                                    {item.title.length <= 60 ? (
                                                        item.title
                                                    ) : (
                                                        <>
                                                            {item.title.substring(0, 60)}...
                                                            <span className="text-app_yellow ml-1">•</span>
                                                        </>
                                                    )}
                                                </h2>
                                            </Tooltip>

                                            <Tooltip top title={item.description} placement="bottom" className='font-titleFont tracking-wide text-sm text-gray-600 pt-2 cursor-pointer' arrow>
                                                <p>
                                                    {item.description.length <= 200 ? (
                                                        item.description
                                                    ) : (
                                                        <>
                                                            {item.description.substring(0, 200)}...
                                                            <span className="text-app_yellow ml-1">•</span>
                                                        </>
                                                    )}</p>
                                            </Tooltip>

                                            <p className='text-base pt-2 text-gray-500 right-2'>Unit Price <span className="font-semibold text-orange-400">${item.price}</span></p>


                                            <div className="flex items-center justify-center bg-[#f0f2f2] w-36 py-2 rounded-md shadow-lg gap-1">
                                                <span className="text-gray-500 right-3">Qty : </span>
                                                <button className="bg-gray-200 px-3 rounded-md hover:bg-app_yellow">-</button>
                                                <span className='px-2'>{item.quantity}</span>
                                                <button className="bg-gray-200 px-3 rounded-md hover:bg-app_yellow">+</button>
                                            </div>

                                            <button className='bg-gradient-to-r from-red-600 to-red-400 w-32 py-1 rounded-lg text-white mt-2 transform hover:scale-105 transition-transform duration-500'>Delete Item</button>
                                        </div>
                                        <div className='w-50'>
                                            <div className='bg-[#f0f2f2] flex justify-center items-center gap-1 w-32 py-2 left-4 text-center drop-shadow-lg rounded-md'>
                                                <p className='text-lg font-titleFont font-semibold'>${item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full h-full rounded-lg bg-white col-span-1 backDrop">


                </div>
            </div>
        </div >
    )
}

export default Cart