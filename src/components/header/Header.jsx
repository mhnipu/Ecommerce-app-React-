/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../assets/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Header = () => {
    return (
        <div>
            <div className="w-full bg-app_blue text-white px-4 py-3 flex items-center gap-4">
                {/* logo */}
                <div className="imgHover">
                    <img src={logo} alt="" className='w-24 mt-2' />
                </div>
                {/* delivery start */}
                <div className="headerHover">
                    <LocationOnOutlinedIcon />
                    <p className='text-sm text-lightText font-light flex flex-col'>Delivery to <span className='text-sm font-semibold -mt-1 text-whiteText'>Oman</span></p>
                </div>
                {/* searchBar  */}
                <div className='h-10 rounded-md flex flex-grow relative'>
                    <span className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-500 text-sm text-app_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span></span> <ArrowDropDownOutlinedIcon /></span>
                    <input type="text" className="h-full text-base text-app_blue flex-grow outline-none border-none px-2" />
                    <span className='w-12 h-full flex items-center justify-center bg-app_yellow hover:bg-[#f3a847] duration-500 text-app_blue cursor-pointer rounded-tr-md rounded-br-md'>
                        <SearchOutlinedIcon />
                    </span>
                </div>

            </div>
        </div>

    )
}

export default Header 