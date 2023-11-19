/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ArrowRight, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { darkLogo } from '../assets';

const Sign_in = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [contactMethod, setContactMethod] = useState('email');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [Erroremail, setErrorEmail] = useState('');
    const [ErrorPassword, setErrorPassword] = useState('');



    const emailValidation = (email) => {
        const lowerCaseEmail = String(email).toLowerCase(); // Convert email to lowercase
        return lowerCaseEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }
    const phoneNumberValidation = (phoneNumber) => {
        // Implement your phone number validation logic here
        return /^\d{10,15}$/.test(phoneNumber); // Validates if the number is between 10 to 15 digits
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        if (contactMethod === 'email') {
            if (!email) {
                setErrorEmail('Enter your Email');
            } else if (!emailValidation(email)) {
                setErrorEmail('Please enter a valid email');
            } else if (email !== email.toLowerCase()) {
                setErrorEmail('Email should be in lowercase');
            } else {
                setErrorEmail('');
            }
        } else if (contactMethod === 'phone') {
            if (!phoneNumber) {
                setShowErrorMessage(true);
            } else if (!phoneNumberValidation(phoneNumber)) {
                setShowErrorMessage(true);
            } else {
                setShowErrorMessage(false);
            }
        }

        if (!password) {
            setErrorPassword('Enter your Password');
        } else {
            setErrorPassword('');
        }
        if (
            (contactMethod === 'email' && !Erroremail && email.toLowerCase() === email) ||
            (contactMethod === 'phone' && !showErrorMessage)
        ) {
            console.log(contactMethod === 'email' ? email.toLowerCase() : phoneNumber, password);
            setEmail('');
            setPassword('');
            setPhoneNumber('');
        }

        if (contactMethod === 'email') {
            // Convert email to lowercase before validation
            const lowercaseEmail = email.toLowerCase();

            if (!email) {
                setErrorEmail('Enter your Email');
            } else if (!emailValidation(email)) {
                setErrorEmail('Please enter a valid email');
            } else if (email !== lowercaseEmail) {
                setErrorEmail('Email should be in lowercase');
            } else {
                setErrorEmail('');
            }
        } else if (contactMethod === 'phone') {
            if (!phoneNumber) {
                setShowErrorMessage(true);
            } else if (!phoneNumberValidation(phoneNumber)) {
                setShowErrorMessage(true);
            } else {
                setShowErrorMessage(false);
            }
        }
    }

    const handlePasswordChange = (value, e) => {
        setPassword(e.target.value);
        setErrorPassword('');
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleInputChange = (e) => {
        if (contactMethod === 'phone' && isNaN(e.target.value)) {
            // Show error message when non-numeric characters are entered for phone number
            setShowErrorMessage(true);
        } else {
            setShowErrorMessage(false);
            setPhoneNumber(e.target.value);
        }
    };
    const handleCombinedChange = (e) => {
        const value = e.target.value;
        if (contactMethod === 'email') {
            setEmail(value);
            setErrorEmail('');
        } else if (contactMethod === 'phone') {
            if (!isNaN(value) || value === '') {
                setPhoneNumber(value);
                setShowErrorMessage(false);
            } else {
                setShowErrorMessage(true);
            }
        }
    };

    return (
        <div className="w-full">
            {/* Sign In Form */}
            <div className="w-full bg-gray-100 pb-20">
                <form className="w-full md:w-[350px] mx-auto flex flex-col items-center" onSubmit={handleSignIn}>
                    {/* Logo */}
                    <img className='w-40 Hover' src={darkLogo} alt="" />

                    {/* Form Container */}
                    <div className='w-full border border-zinc-200 rounded-lg drop-shadow-lg p-8 bg-white '>
                        <h2 className='font-titleFont text-2xl  font-bold mb-4 text-center'>Sign in</h2>

                        {/* Contact Method Selection */}
                        <div className='flex flex-col gap-3'>
                            {/* Email field */}
                            <div className='flex flex-col gap-2 pt-4'>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="radio"
                                        id="emailOption"
                                        name="contactMethod"
                                        value="email"
                                        checked={contactMethod === 'email'}
                                        onChange={() => setContactMethod('email')}
                                    />
                                    <label htmlFor="emailOption" className="font-semibold text-gray-600 cursor-pointer">
                                        Email
                                    </label>

                                    <input
                                        type="radio"
                                        id="phoneOption"
                                        name="contactMethod"
                                        value="phone"
                                        checked={contactMethod === 'phone'}
                                        onChange={() => setContactMethod('phone')}
                                    />
                                    <label htmlFor="phoneOption" className="font-semibold text-gray-600 cursor-pointer">
                                        Phone Number
                                    </label>
                                </div>
                                <input
                                    className="w-full py-1 border border-zinc-300 shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100"
                                    type={contactMethod === 'email' ? 'email' : 'tel'}
                                    pattern={contactMethod === 'phone' ? '[0-9]*' : undefined}
                                    maxLength={contactMethod === 'phone' ? 15 : undefined}
                                    placeholder={contactMethod === 'email' ? 'Enter your email' : 'Enter your phone number'}
                                    value={contactMethod === 'email' ? email : phoneNumber}
                                    onChange={handleCombinedChange}
                                />
                                {contactMethod === 'email' && Erroremail && (
                                    <p className='text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{Erroremail}</p>
                                )}
                            </div>
                            {/* Password Input */}
                            <div className='flex flex-col gap-2 pt-1 relative'>
                                <label className='text-gray-500'>
                                    <span className='font-semibold text-gray-600'>Password</span>
                                </label>
                                <div className="relative">
                                    {/* Password Input */}

                                    <input
                                        className={`w-full py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100 hover cursor-pointer Hover`}
                                        placeholder='enter your password'
                                        style={{ fontSize: '16px' }} // Adjust the font size here
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => handlePasswordChange(e.target.value, e)}
                                    />
                                    {/* Toggle Password Visibility */}
                                    <input
                                        type="checkbox"
                                        className="absolute right-2 top-4 transform -translate-y-1/2 cursor-pointer opacity-0 w-6 h-6 text-gray-600"
                                        onChange={() => togglePasswordVisibility(1)}
                                        checked={showPassword}
                                        id="togglePassword1"
                                    />
                                    <label
                                        htmlFor="togglePassword1"
                                        className="absolute right-2 top-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </label>
                                    {
                                        ErrorPassword && (
                                            <p className='text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{ErrorPassword}</p>
                                        )
                                    }
                                </div>
                                {/* Forgot Password Link */}
                                <div className="text-sm text-app_light hover:underline cursor-pointer mt-1 ml-auto">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>

                            {/* Continue Button */}
                            <button type="submit" className='mt-6 px-8 bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-105 drop-shadow-lg'>Continue</button>
                        </div>

                        {/* Terms and Conditions */}
                        <div>
                            <p className='text-xs text-gray-600 pt-6 group'>
                                By Continuing you agree to <span className='font-semibold'>App`s </span>
                                <span className="text-blue-500 cursor-pointer  hover:underline">Conditions of Use {""}</span>and
                                <span className="text-blue-500 cursor-pointer  hover:underline"> Privacy Notice.</span>
                            </p>
                        </div>

                        {/* Need Help Link */}
                        <p className='text-xs mt-4 text-gray-600 cursor-pointer group'>
                            <ArrowRight className='' />
                            <span className="text-blue-500 cursor-pointer  hover:underline"> Need help?</span>
                        </p>
                    </div>

                    {/* New to Amazon Section */}
                    <div className='w-full text-xs text-gray-600 mt-4 flex items-center'>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                        <span className='w-1/3 font-semibold text-gray-500 text-center'>New to Amazon?</span>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    </div>

                    {/* Create Account Button */}
                    <Link className='w-full' to='/registration'>
                        <button className='w-full py-1.5 mt-4 text-sm font-normal rounded-lg bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-app_yellow active:shadow-appShadow Hover'>
                            Create your Amazon Account
                        </button>
                    </Link>
                </form>
            </div>
            {/* Footer Section */}
            <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
                <div className='flex items-center justify-center gap-8'>
                    <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                        Conditions of Use
                    </p>
                    <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                        Privacy Policy
                    </p>
                    <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                        Privacy Notice
                    </p>
                </div>
                <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>

    );
}

export default Sign_in;
