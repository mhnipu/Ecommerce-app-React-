/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/appSlice';

const ProductView = () => {
    const dispatch = useDispatch()
    const viewedProduct = useSelector((state) => state.app.viewedProduct);
    const [activeImage, setActiveImage] = useState(viewedProduct.image);
    const [zoomedImagePosition, setZoomedImagePosition] = useState({ x: 0, y: 0 });
    const [showZoomedImage, setShowZoomedImage] = useState(false);
    if (!viewedProduct) {
        return <div>No product found!</div>;
    }


    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const x = (mouseX / width) * 100;
        const y = (mouseY / height) * 100;

        const magnifierWidth = 200; // Adjust this according to your magnifier size
        const magnifierHeight = 200; // Adjust this according to your magnifier size

        let backgroundX = (mouseX / width) * (width - magnifierWidth);
        let backgroundY = (mouseY / height) * (height - magnifierHeight);

        let leftPos = mouseX - magnifierWidth / 2;
        let topPos = mouseY - magnifierHeight / 2;

        if (backgroundX < 0) {
            backgroundX = 0;
            leftPos = 0;
        } else if (backgroundX + magnifierWidth > width) {
            backgroundX = width - magnifierWidth;
            leftPos = width - magnifierWidth;
        }

        if (backgroundY < 0) {
            backgroundY = 0;
            topPos = 0;
        } else if (backgroundY + magnifierHeight > height) {
            backgroundY = height - magnifierHeight;
            topPos = height - magnifierHeight;
        }

        setZoomedImagePosition({ x, y, backgroundX, backgroundY, leftPos, topPos });
    };









    const images = {
        img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    };


    const handleMouseEnter = () => {
        setShowZoomedImage(true);
    };
    const handleMouseLeave = () => {
        setShowZoomedImage(false);
    };


    const handleImageClick = (imageUrl) => {
        setActiveImage(imageUrl);
    };

    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col lg:flex-row items-stretch w-full justify-between gap-6'>
                {/* Image */}
                <div className='w-full lg:w-2/5 rounded-lg h-auto drop-shadow-lg flex flex-col gap-6 justify-center items-center'>
                    {/* active image */}
                    <div className='w-full rounded-lg h-full drop-shadow-lg flex flex-col gap-6 justify-center items-center bg-white'>
                        <div
                            className='relative'
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className='w-52 h-80 object-contain imgHover'
                                src={viewedProduct.image}
                                alt=''
                            />
                            {showZoomedImage && (
                                <div
                                    className='absolute border border-gray-500'
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        backgroundImage: `url(${viewedProduct.image})`,
                                        backgroundSize: '800% 800%',
                                        backgroundPosition: `${zoomedImagePosition.x}% ${zoomedImagePosition.y}%`,
                                        left: '100%',
                                        top: 10,
                                        zIndex: 999,
                                    }}
                                ></div>
                            )}
                        </div>
                    </div>
                    {/* other image */}
                    <div className=' w-full flex flex-row justify-between h-24 gap-2 drop-shadow-lg items-center '>
                        {Object.values(images).map((image, index) => (
                            <div key={index} className='bg-gray-100 rounded-lg drop-shadow-lg flex justify-center items-center'>
                                <img src={image} alt={`Image ${index + 1}`} className='w-24 h-24 rounded-md cursor-pointer imgHover' onClick={() => handleImageClick(image)} />
                            </div>
                        ))}
                    </div>
                </div>


                {/* About */}
                <div className='lg:w-2/5 flex flex-col gap-4 w-full mx-auto ml-10 '>
                    <div className="h-full">
                        <span className='text-app_yellow font-semibold'>Special {viewedProduct.category}</span>
                        <h1 className='text-4xl font-bold'>{viewedProduct.title}</h1>
                    </div>
                    <p className='text-gray-700 flex-1'>{viewedProduct.description}</p>
                    <h6 className='text-3xl font-semibold'>${viewedProduct.price}</h6>
                    <div className='flex items-center gap-12'>
                        <Link to='/cart'>
                            <button onClick={() => {
                                dispatch(
                                    addToCart({
                                        id: viewedProduct.id,
                                        title: viewedProduct.title,
                                        description: viewedProduct.description,
                                        price: viewedProduct.price,
                                        category: viewedProduct.category,
                                        image: viewedProduct.image,
                                        quantity: 1,
                                    }),
                                );
                            }} className="w-full font-titleFont text-base bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500  shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-95 drop-shadow-lg font-semibold py-3 px-12 rounded-xl" >Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
