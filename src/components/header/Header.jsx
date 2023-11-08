/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import logo from '../../assets/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { allItems } from '../../constants';
import { ShoppingCart } from '@mui/icons-material';
import HeaderBottom from './HeaderBottom';
import { useSelector } from 'react-redux';
const Header = () => {
    const products = useSelector((state) => state.appReducer.products);
    const [showAll, setShowAll] = useState(false)

    return (
        <div className='w-full sticky top-0 z-50'>
            <div className="w-full bg-app_blue text-white px-4 py-3 flex items-center gap-4">
                {/* logo */}
                <div className="imgHover">
                    <img src={logo} alt="" className='w-24 mt-2' />
                </div>
                {/* delivery start */}
                <div className="headerHover hidden mdl:inline-flex">
                    <LocationOnOutlinedIcon />
                    <p className='text-sm text-lightText font-light flex flex-col'>Delivery to <span className='text-sm font-semibold -mt-1 text-whiteText'>Oman</span></p>
                </div>
                {/* delivery end */}
                {/* searchBar  */}
                <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
                    <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-500 text-sm text-app_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span></span> <ArrowDropDownOutlinedIcon /></span>
                    {showAll && (
                        <div >
                            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-app_blue text-black p-2 flex-col gap-1 z-50'>

                                {
                                    allItems.map((item) => (
                                        <li className=' text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-app_blue cursor-pointer duration-500 hover:text-app_yellow' key={item._id}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                    <input type="text" className="h-full text-base text-app_blue flex-grow outline-none border-none px-2" />
                    <span className='w-12 h-full flex items-center justify-center bg-app_yellow hover:bg-[#f3a847] duration-500 text-app_blue cursor-pointer rounded-tr-md rounded-br-md '>
                        <SearchOutlinedIcon />
                    </span>
                </div>
                {/* search end */}
                {/* Sign in start */}
                {/* <Link to="/signIn">
                    <div className='flex flex-col items-start justify-center headerHover'>
                        <p className='text-sm mdl:text-xs text-lightText font-light'>Hello , sign in</p>
                        <p className='text-sm text-white font-semibold -mt-1 hidden mdl:inline-flex'>Accounts & Lists {' '}<span><ArrowDropDownOutlinedIcon /></span></p>
                    </div>
                </Link> */}
                <div className='flex flex-col items-start justify-center headerHover'>
                    <p className='text-sm mdl:text-xs text-lightText font-light'>Hello , sign in</p>
                    <p className='text-sm text-white font-semibold -mt-1 hidden mdl:inline-flex'>Accounts & Lists {' '}<span><ArrowDropDownOutlinedIcon /></span></p>
                </div>
                {/* Sign in end */}
                {/* Order start */}
                <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
                    <p className='text-sm text-lightText font-light'>Returns</p>
                    <p className='text-sm text-white font-semibold -mt-1'>& Orders</p>
                </div>
                {/* Order end */}
                {/* Cart start */}
                <div className='flex items-start justify-center headerHover relative'>
                    <ShoppingCart />
                    <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute text-xs -top-2 left-7 font-semibold p-1 h-4 bg-[#f3a847] text-app_blue rounded-full flex justify-center items-center '>
                        {
                            products.length > 0 ? products.length : 0
                        }
                    </span></p>
                </div>
                {/* cart end */}
            </div>
            <HeaderBottom />
        </div >

    )
}

export default Header 