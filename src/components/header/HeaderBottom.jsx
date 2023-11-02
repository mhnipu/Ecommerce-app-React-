/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { CloseFullscreen, CloseOutlined, MenuRounded } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { AccountCircleRounded } from '@mui/icons-material'
import SideNav from './SideNav'
import { motion } from 'framer-motion'
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
                    <div className='w-full h-screen text-black fixed top-0 left-0 bg-app_blue backdrop-blur-sm bg-opacity-5 '>
                        <div className='w-full h-full relative '>
                            <motion.div initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }} className=' w-[350px] h-full border-0 border-app_light    backdrop-blur-xl bg-white/80 '>
                                <div className='w-full bg-app_light text-white py-2 px-6 flex items-center gap-4 '>
                                    <AccountCircleRounded />
                                    <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
                                </div>
                                <div>
                                    <h3>
                                        <SideNav
                                            title='Digital Contents & Devices'
                                            one='Amazon Music' two='spotify' three='amazon Appstore' />
                                        <SideNav
                                            title='Books & Literature'
                                            one='Bestsellers'
                                            two='Mystery Novels'
                                            three='Science Fiction'
                                        />

                                        <SideNav
                                            title='Electronics & Gadgets'
                                            one='Smartphones'
                                            two='Wearable Tech'
                                            three='Home Appliances'
                                        />

                                        <SideNav
                                            title='Digital Contents & Devices'
                                            one='E-books'
                                            two='Streaming Music'
                                            three='Mobile Apps'
                                        />

                                    </h3>
                                </div>
                                <span onClick={() => setSideBar(false)} className='cursor-pointer absolute top-2 left-[310px] w-8 h-8 text-whiteText flex items-center rounded justify-center 
                                bg-app_light hover:bg-app_yellow hover:text-white duration-500'><CloseOutlined /></span>
                            </motion.div>

                        </div>
                    </div>
                )
            }
            {/* sideNav end */}
        </div>
    )
}

export default HeaderBottom