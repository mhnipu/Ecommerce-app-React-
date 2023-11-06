/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'

const SideNav = ({ title, one, two, three }) => {
    return (
        <div className='py-3 border-b-[1px] border-b-gray-300'>
            <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
                {title}
            </h3>
            <ul className='text-sm font-semibold'>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer ">
                    <h2 className=" imgHover">{one}</h2>
                    <span >
                        <KeyboardArrowRight />
                    </span>
                </li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    <h2 className=" imgHover">{two}</h2>
                    <span >
                        <KeyboardArrowRight />
                    </span>
                </li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    <h2 className=" imgHover">{three}</h2>
                    <span >
                        <KeyboardArrowRight />
                    </span>
                </li>

            </ul>
            
        </div>
    )
}

export default SideNav