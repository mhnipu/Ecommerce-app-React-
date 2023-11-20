import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductView = () => {
    const viewedProduct = useSelector((state) => state.app.viewedProduct);
    const [amount, setAmount] = useState(1);
    if (!viewedProduct) {
        return <div>No product found!</div>;
    }
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col lg:flex-row items-stretch w-full justify-between gap-6'>
                {/* Image */}
                <div className="w-full lg:w-2/5 bg-white rounded-lg h-auto drop-shadow-lg flex justify-center items-center py-16">
                    <img className='w-full h-60 object-contain imgHover' src={viewedProduct.image} alt="" />
                </div>
                {/* About */}
                <div className='lg:w-2/5 flex flex-col gap-4 w-full mx-auto top-0 ml-4'>
                    <div className="h-full">
                        <span className='text-violet-600 font-semibold'>Special Sneaker</span>
                        <h1 className='text-4xl font-bold'>{viewedProduct.title}</h1>
                    </div>
                    <p className='text-gray-700 flex-1'>{viewedProduct.description}</p>
                    <h6 className='text-3xl font-semibold'>${viewedProduct.price}</h6>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center'>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}>-</button>
                            <span className='py-4 px-6 rounded-lg bg-gray-200'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <Link to='/cart'>
                            <button className="w-full font-titleFont text-base bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500  shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-95 drop-shadow-lg font-semibold py-3 px-12 rounded-xl" >Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
