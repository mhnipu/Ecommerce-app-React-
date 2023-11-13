/* eslint-disable no-unused-vars */
import React from 'react'
import { darkLogo } from '../assets'
import { Hidden } from '@mui/material'
import { PanoramaFishEye, VisibilityOff } from '@mui/icons-material'


const Sign_in = () => {
    return (
        <div className="w-full ">
            <div className="w-full bg-gray-100 pb-10">
                <form className="w-[350px] mx-auto flex flex-col items-center ">
                    <img className='w-40 Hover' src={darkLogo} alt="" />
                    <div className='w-full border border-zinc-200 rounded-lg drop-shadow-lg p-8 bg-white '>
                        <h2 className='font-titleFont text-2xl  font-bold mb-4 text-center'>Sign in</h2>
                        <div>
                            <div className='flex flex-col gap-2 py-4'>
                                <p className='text-gray-500'><span className='font-semibold  text-gray-600'>Email</span> or <span className='font-semibold text-gray-600'>mobile phone number</span></p>
                                <input className="w-full lowercase py-1 border border-zinc-300  shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100" type="email" />
                            </div>
                            <div className='flex flex-col gap-2 py-4'>
                                <p className='text-gray-500'><span className='font-semibold text-gray-600 '>Password</span><VisibilityOff className='' /></p>
                                <input className="w-full lowercase py-1 border border-zinc-300  shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100" type="email" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Sign_in