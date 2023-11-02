/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MenuRounded } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { AccountCircleRounded } from '@mui/icons-material'
import SideNav from './SideNav'
const HeaderBottom = () => {
    const [sidebar, setSideBar] = useState(false)
    return (
        <div className="w-full px-4 h-[36px] bg-app_light text-white flex items-center">
            {/* ListItems start */}
            <ul className='flex items-center gap-2 text-sm tracking-wide font-semibold'>
                <li onClick={() => setSideBar(true)} className="headerHover flex items-center gap-1"><MenuRounded />All</li>
                <li className="headerHover ">Today's Deals</li>
                <li className="headerHover ">Customer Service</li>
                <li className="headerHover ">Gift Cards</li>
                <li className="headerHover ">Registry</li>
                <li className="headerHover ">Sell</li>
            </ul>
            {/* ListItems end */}
            {/* sideNav start */}
            {
                sidebar && (
                    <div className='w-full h-screen text-black fixed top-0 left-0 bg-app_blue bg-opacity-50  '>
                        <div className='w-full h-full relative '>
                            <div className=' w-[350px] h-full border-0 border-app_light backdrop-blur-xl bg-white/50 '>
                                <div className='w-full bg-app_light text-white py-2 px-6 flex items-center gap-4 '>
                                    <AccountCircleRounded />
                                    <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
                                </div>
                                <div>
                                    <h3>
                                        <SideNav />
                                    </h3>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
            {/* sideNav end */}
        </div>
    )
}

export default HeaderBottom