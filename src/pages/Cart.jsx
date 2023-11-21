/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { CheckCircle, RemoveRedEyeRounded, ShoppingCart } from '@mui/icons-material';
import { Alert, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/appSlice';
import { setViewedProduct } from '../redux/appSlice';
import { emptyCart } from '../assets/index'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
const Cart = () => {
    const handleProductView = (item) => {
        dispatch(
            setViewedProduct({
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                category: item.category,
                image: item.image,
                quantity: 1,
            })
        );
        // Redirect to product view page based on the ID
    };

    const dispatch = useDispatch()
    const products = useSelector((state) => state.app.products);
    const [totalPrice, setTotalPrice] = useState('')
    useEffect(() => {
        let Total = 0;
        products.map((item) => {
            Total += item.price * item.quantity;
            return setTotalPrice(Total.toFixed(2))
        })
    }, [products])
    return (
        <div className="w-full bg-gray-200 p-4">
            {/* Check if there are products in the cart */}
            {products.length > 0 ? (
                <div className=" mx-auto h-auto grid grid-cols-5 gap-6">
                    {/* Shopping Cart */}
                    <div className="w-full h-full bg-white rounded-lg px-4 col-span-4 backDrop p-3 ">
                        {/* Cart Header */}
                        <div className="font-titleFont flex items-center justify-between py-2 bg-gray-100 rounded-lg p-4 backDrop drop-shadow-lg" >
                            <h2 className="font-semibold text-2xl">Shopping Cart</h2>
                            {/* Clear Cart Button */}
                            <div onClick={() => dispatch(resetCart())} className='text-right'>
                                <button className='bg-gradient-to-r from-red-600 to-red-400 w-32 py-1 rounded-lg text-white transform hover:scale-105 transition-transform duration-500 text-xl'>
                                    Clear Cart
                                </button>
                            </div>
                        </div>

                        {/* Product List */}
                        <div className="pt-4">
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

                                            {/* Quantity Controls */}
                                            <div className="flex items-center justify-center bg-[#f0f2f2] w-44 py-2 rounded-md shadow-lg gap-1">
                                                <span className="text-gray-500 right-3">Qty : </span>
                                                <button onClick={() => dispatch(decrementQuantity(item.id))} className="bg-gray-200 px-3 rounded-md hover:bg-app_yellow">-</button>
                                                <span className='px-2'>{item.quantity}</span>
                                                <button onClick={() => dispatch(incrementQuantity(item.id))} className="bg-gray-200 px-3 rounded-md hover:bg-app_yellow">+</button>
                                            </div>

                                            {/* Delete Item Button */}
                                            <button onClick={() => dispatch(deleteItem(item.id))} className='bg-gradient-to-r from-red-600 to-red-400 w-32 py-1 rounded-lg text-white mt-2 transform hover:scale-105 transition-transform duration-500'>Delete Item</button>
                                            <button onClick={() => dispatch(deleteItem(item.id))} className='ml-2 bg-gradient-to-r from-gray-500 to-gray-400 w-10 py-1 rounded-lg text-white mt-2 transform hover:scale-105 transition-transform duration-500'><span >
                                                <Tooltip top title="Product View" placement="left" arrow>
                                                    {/* Use a Link or navigate to the product view */}
                                                    <Link to={`/products/${item.id}`} onClick={() => handleProductView(item)}>
                                                        <RemoveRedEyeRounded />
                                                    </Link>
                                                </Tooltip>
                                            </span></button>

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
                    </div>

                    {/* Order Summary */}
                    <div className="w-full h-72 rounded-lg bg-white col-span-1 backDrop flex flex-col items-center justify-center p-4 sticky top-28 z-0">
                        {/* Free Shipping Information */}
                        <div>
                            <p className='flex gap-2 items-start text-sm text-gray-600'>
                                <span><CheckCircle className='bg-white text-green-500 rounded-full' /></span>
                                {''} your order qualifies for FREE Shipping Choose this option at checkout. See details . . . .
                            </p>
                        </div>

                        {/* Total Price */}
                        <div>
                            <p className='font-semibold px-10 py-5 flex items-center justify-between gap-2'>Total : <span className="text-lg font-bold bg-[#f0f2f2] flex justify-center items-center gap-1 w-auto py-2 left-4 text-center p-6 drop-shadow-lg rounded-md">${totalPrice}</span></p>
                        </div>

                        {/* Proceed to Pay and Continue Shopping Buttons */}
                        <div>
                            <button className="w-full  font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md mt-3 shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-95 drop-shadow-lg" >Proceed to Pay</button>
                            <Link to={'/'}>
                                <button className='w-full px-8 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md mt-6 shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-95 drop-shadow-lg'>Continue Shopping</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                /* Empty Cart Message */
                <motion.div
                    initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center justify-center flex-col lg:flex-row gap-4 py-10"
                >
                    <div>
                        <img className='w-80 rounded-lg p-4 mx-auto' src={emptyCart} alt="" />
                    </div>
                    <div className='flex flex-col items-center bg-white rounded-lg shadow-lg w-96 p-4'>
                        <h1 className='font-titleFont text-xl font-bold'>
                            Your Cart feels lonely.
                        </h1>
                        <p className='text-sm text-center text-gray-600'>
                            Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.
                        </p>
                        <Link to={'/'}>
                            <button className='px-8 bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md mt-6 shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-95 drop-shadow-lg'>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>

    )
}

export default Cart