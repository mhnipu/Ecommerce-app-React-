/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../../constants'
import { bdFlag, logo } from '../../assets'

const FooterMiddle = () => {
    return (
        <div className='w-full bg-app_light text-white'>
            {/* top start here  */}
            <div className='w-full border-gray-500 p-10'>
                <div className='max-w-5xl mx-auto text-gray-300'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-3 lgl:grid-cols-5 gap-8 md:place-items-center md:items-start '>
                        {
                            middleList.map((item) => (
                                <FooterMiddleList key={item._id} title={item.title} listItem={item.listItem} />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* top end here */}
            {/* bottom start here  */}
            <div className="w-full flex bg-[#212c3b] gap-6 items-center justify-center py-6 ">
                <div>
                    <img className='w-20 pt-3 Hover' src={logo} alt="" />
                </div>
                <div className='flex gap-2'>
                    <p className='flex gap-1 items-center justify-center border rounded border-gray-500 hover:border-app_yellow cursor-pointer Hover px-2 py-1 '>English</p>
                </div>
                <div className="flex gap-1 items-center justify-center border rounded border-gray-500 hover:border-app_yellow cursor-pointer Hover px-2 py-1 ">
                    <img className='w-6' src={bdFlag} alt="" />
                    <p>Bangladesh</p>
                </div>

            </div>
            {/* bottom end here  */}
        </div>
    )
}

export default FooterMiddle