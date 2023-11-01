/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Header = () => {
    const [showAll, setShowAll] = useState(false)
    const allItems = [
        { _id: '21', title: 'sales department' },
        { _id: '22', title: 'marketing department' },
        { _id: '23', title: 'human resources department' },
        { _id: '24', title: 'finance department' },
        { _id: '25', title: 'customer service department' },
        { _id: '26', title: 'research and development department' },
        { _id: '27', title: 'information technology department' },
        { _id: '28', title: 'product development department' },
        { _id: '29', title: 'quality assurance department' },
        { _id: '30', title: 'supply chain department' },
        { _id: '31', title: 'legal department' },
        { _id: '32', title: 'administrative department' },
        { _id: '33', title: 'public relations department' },
        { _id: '34', title: 'facilities management department' },
        { _id: '35', title: 'sales department' },
        { _id: '36', title: 'marketing department' },
        { _id: '37', title: 'human resources department' },
        { _id: '38', title: 'finance department' },
        { _id: '39', title: 'customer service department' },
        { _id: '40', title: 'research and development department' },
        { _id: '41', title: 'information technology department' }

    ]
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
                    <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-500 text-sm text-app_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span></span> <ArrowDropDownOutlinedIcon /></span>
                    {showAll && (
                        <div>
                            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-app_blue text-black p-2 flex-col gap-1 z-50'>

                                {
                                    allItems.map((item) => (
                                        <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-app_blue cursor-pointer duration-500' key={item._id}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                    <input type="text" className="h-full text-base text-app_blue flex-grow outline-none border-none px-2" />
                    <span className='w-12 h-full flex items-center justify-center bg-app_yellow hover:bg-[#f3a847] duration-500 text-app_blue cursor-pointer rounded-tr-md rounded-br-md'>
                        <SearchOutlinedIcon />
                    </span>
                </div>
            </div>
        </div >

    )
}

export default Header 