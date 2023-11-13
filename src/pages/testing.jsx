import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { darkLogo } from '../assets';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

const Registration = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 1) {
            setShowPassword1(!showPassword1);
        } else if (field === 2) {
            setShowPassword2(!showPassword2);
        }
    };

    return (
        <div className='w-full'>
            <div className='w-full bg-gray-100 pb-20'>
                <form className="w-[370px] mx-auto flex flex-col items-center">
                    <img className='w-40 Hover' src={darkLogo} alt="" />
                    <div className='w-full border border-zinc-200 rounded-lg drop-shadow-lg p-8 bg-white '>
                        <h2 className='font-titleFont text-2xl font-bold mb-4 text-center'>Create Account</h2>
                        <div>
                            <div className='flex flex-col gap-2 py-1 pt-6'>
                                <p className='font-semibold text-gray-600'>Your name</p>
                                <input className="w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100" type="text" />
                            </div>
                            <div className='flex flex-col gap-2 pt-2'>
                                <p className='text-gray-500'>
                                    <span className='font-semibold text-gray-600'>Email</span> or <span className='font-semibold text-gray-600'>mobile phone number</span>
                                </p>
                                <input className="w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100" type="email" />
                            </div>
                            <div className='flex flex-col gap-2 py-1 relative'>
                                {/* Tooltip for password field */}
                                <Tooltip title="Password must be 6 characters" arrow placement="right">
                                    <label className='text-gray-500'>
                                        <span className='font-semibold text-gray-600'>Password</span>
                                    </label>
                                </Tooltip>
                                <div className="relative">
                                    <input
                                        className="w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100"
                                        type={showPassword1 ? 'text' : 'password'}
                                    />
                                    <input
                                        type="checkbox"
                                        className="absolute right-2 top-2/4 transform -translate-y-1/2 cursor-pointer opacity-0 w-6 h-6 text-gray-600"
                                        onChange={() => togglePasswordVisibility(1)}
                                        checked={showPassword1}
                                        id="togglePassword1"
                                    />
                                    <label
                                        htmlFor="togglePassword1"
                                        className="absolute right-2 top-2/4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                    >
                                        {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 py-1 relative'>
                                {/* Tooltip for confirm password field */}
                                <Tooltip title="Password must be 6 characters" arrow placement="right">
                                    <label className='text-gray-500'>
                                        <span className='font-semibold text-gray-600'>Confirm password</span>
                                    </label>
                                </Tooltip>
                                <div className="relative">
                                    <input
                                        className="w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100"
                                        type={showPassword2 ? 'text' : 'password'}
                                    />
                                    <input
                                        type="checkbox"
                                        className="absolute right-2 top-2/4 transform -translate-y-1/2 cursor-pointer opacity-0 w-6 h-6 text-gray-600"
                                        onChange={() => togglePasswordVisibility(2)}
                                        checked={showPassword2}
                                        id="togglePassword2"
                                    />
                                    <label
                                        htmlFor="togglePassword2"
                                        className="absolute right-2 top-2/4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                    >
                                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                    </label>
                                </div>
                            </div>
                            <button onClick={(e) => e.preventDefault()} className='w-full mt-10 px-8 bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-105 drop-shadow-lg'>
                                Continue
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
