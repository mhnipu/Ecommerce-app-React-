/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {
    Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from 'react'
import logo from '../../assets/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { allItems } from '../../constants';
import { ShoppingCart } from '@mui/icons-material';
import HeaderBottom from './HeaderBottom';
import { useSelector } from 'react-redux';
import { Alert, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {
    const products = useSelector((state) => state.app.products);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        // Check if the products length has changed
        if (products.length > 0) {
            // Update the message and show it
            setMessage('Added to Cart');
            setShowMessage(true);

            // Automatically hide the message after 5 seconds
            setTimeout(() => {
                setShowMessage(false);
                setMessage('');
            }, 1000);
        }
    }, [products]);


    return (
        <div className='w-full sticky top-0 z-50'>
            <div className="w-full bg-app_blue text-white px-4 py-3 flex items-center gap-4">
                {/* logo */}
                <Link to='/'>
                    <div className="imgHover">
                        <img src={logo} alt="" className='w-24 mt-2' />
                    </div>
                </Link>
                {/* delivery start */}
                <div className="headerHover hidden mdl:inline-flex">
                    <LocationOnOutlinedIcon />
                    <p className='text-sm text-lightText font-light flex flex-col'>Delivery to <span className='text-sm font-semibold -mt-1 text-whiteText'>Oman</span></p>
                </div>
                {/* delivery end */}
                {/* searchBar  */}
                <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>

                    <span className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-500 text-sm font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
                        <Menu><MenuHandler>
                            <Button onClick={() => setShowAll(!showAll)} className='text-app_blue text-sm font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span></span> <ArrowDropDownOutlinedIcon /></Button>
                        </MenuHandler>
                            <MenuList className="max-h-screen absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white drop-shadow-lg  text-black p-2 flex-col gap-1 z-50 items-start justify-start flex">
                                <MenuItem>
                                    <ul>
                                        {
                                            allItems.map((item) => (
                                                <li className=' text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-app_blue cursor-pointer duration-500 hover:text-app_yellow text-left py-1' key={item._id}>{item.title}</li>
                                            ))
                                        }
                                    </ul>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </span>

                    <input type="text" className="h-full text-base text-app_blue flex-grow outline-none border-none px-2" />
                    <span className='w-12 h-full flex items-center justify-center bg-app_yellow hover:bg-[#f3a847] duration-500 text-app_blue cursor-pointer rounded-tr-md rounded-br-md '>
                        <SearchOutlinedIcon />
                    </span>
                </div>
                {/* search end */}
                {/* Sign in start */}
                <Link to="/signIn">
                    <div className='flex flex-col items-start justify-center headerHover'>
                        <p className='text-sm mdl:text-xs text-lightText font-light'>Hello , sign in</p>
                        <p className='text-sm text-white font-semibold -mt-1 hidden mdl:inline-flex'>Accounts & Lists {' '}<span><ArrowDropDownOutlinedIcon /></span></p>
                    </div>
                </Link>
                {/* Sign in end */}
                {/* Order start */}
                <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
                    <p className='text-sm text-lightText font-light'>Returns</p>
                    <p className='text-sm text-white font-semibold -mt-1'>& Orders</p>
                </div>
                {/* Order end */}
                {/* Cart start */}
                <Link to='/cart'>
                    <div className='flex items-start justify-center headerHover relative'>
                        <ShoppingCart />
                        <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute text-xs -top-2 left-7 font-semibold p-1 h-4 bg-[#f3a847] text-app_blue rounded-full flex justify-center items-center '>
                            {
                                products.length > 0 ? products.length : 0
                            }
                        </span></p>
                    </div>
                </Link>

                <div className="flex items-start justify-end headerHover relative">
                    {showMessage && (
                        <div className=''>
                            <Alert severity="success" color="warning">
                                Product Updated in <ShoppingCart />
                            </Alert>
                        </div>
                    )}
                </div>
                {/* cart end */}
            </div>


            <HeaderBottom />

        </div >

    )
}

export default Header 