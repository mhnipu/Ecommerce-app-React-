/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const FooterMiddleList = ({ title, listItem }) => {

    return (
        <div>
            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>{title}</h3>
            <ul className='flex flex-col gap-2 font-bodyFont'>
                {
                    listItem.map((item) => item.listData.map((data, i) => (
                        <li key={i} className='footerHover'>{data}</li>
                    )))
                }
            </ul>
        </div>
    )
}

export default FooterMiddleList