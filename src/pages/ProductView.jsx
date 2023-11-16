/* eslint-disable no-unused-vars */
import { Tooltip } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

const ProductView = () => {
    const data = useLoaderData()
    const products = useSelector((state) => state.app.products);

    return (
        <div className="w-full bg-gray-200 p-4">
            {products.map((item) => (
                // Individual Product Item
                <div key={item.id} className="w-full bg-gray-100 p-4 flex rounded-lg items-center gap-6 border-b-[1px] border-b-gray-300 m-1">
                    {/* Product Image */}
                    <div className="w-full flex items-center justify-between gap-6 ">
                        <div className="w-2/5 bg-white rounded-lg py-5 drop-shadow-lg ">
                            <img className='w-full h-44 object-contain imgHover' src={item.image} alt="" />
                        </div>
                        {/* Product Details */}
                        <div className="w-3/5 mx-auto">
                            {/* Product Title */}
                            <Tooltip top title={item.title} placement="left" className='font-titleFont pt-2 cursor-pointer font-semibold text-lg' arrow>
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

                            {/* Product Description */}
                            <Tooltip top title={item.description} placement="bottom" className='font-titleFont tracking-wide text-sm text-gray-600 pt-2 cursor-pointer' arrow>
                                <p>
                                    {item.description.length <= 200 ? (
                                        item.description
                                    ) : (
                                        <>
                                            {item.description.substring(0, 200)}...
                                            <span className="text-app_yellow ml-1">•</span>
                                        </>
                                    )}
                                </p>
                            </Tooltip>

                            {/* Product Price */}
                            <p className='text-base pt-2 text-gray-500 right-2'>Unit Price <span className="font-semibold text-orange-400">${item.price}</span></p>


                        </div>

                        {/* Total Price for Item */}
                        <div className='w-50'>
                            <div className='bg-[#f0f2f2] flex justify-center items-center gap-1 w-auto py-2 left-4 p-4 text-center drop-shadow-lg rounded-md'>
                                <p className='text-lg font-titleFont font-semibold'>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductView;
