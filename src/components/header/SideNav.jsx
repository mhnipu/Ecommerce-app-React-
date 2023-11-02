/* eslint-disable no-unused-vars */
import { ArrowRightAltRounded } from '@mui/icons-material'
import React from 'react'

const SideNav = () => {
    return (
        <div >
            <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
                Digital Contents & Devices
            </h3>
            <ul>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    Amazon Music{''}
                    <span>
                        <ArrowRightAltRounded />
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default SideNav