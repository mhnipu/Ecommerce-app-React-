/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterTop = () => {
    const [hideContent, setHideContent] = useState(false);

    const handleStartHereClick = () => {
        setHideContent(true);
    };

    return (
        <div className={`w-full bg-white py-6 ${hideContent ? 'hidden' : ''}`}>
            <div className='w-full py-8'>
                <div className='w-64 mx-auto text-center flex flex-col gap-1'>
                    <p className='text-sm'>See Personalised recommendations</p>
                    <Link to='/signin'>
                        <button className='w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 Hover' onClick={handleStartHereClick}>Sign In</button>
                    </Link>
                    <p className='text-xs mt-1'>New Customer ?{' '}<span className="text-blue-500 cursor-pointer hover:underline" onClick={handleStartHereClick}>Start Here.</span></p>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
