/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ArrowRight, Info, Visibility, VisibilityOff } from '@mui/icons-material';
import { darkLogo } from '../assets';
import { Link } from 'react-router-dom';
import { Tooltip, LinearProgress } from '@mui/material';

const Registration = () => {

    const [contactMethod, setContactMethod] = useState('email');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    // State variables for password visibility

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isPasswordTyping, setIsPasswordTyping] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    // registration state variables
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // error massages
    const [ErrorclientName, setErrorClientName] = useState('');
    const [Erroremail, setErrorEmail] = useState('');
    const [ErrorPassword, setErrorPassword] = useState('');
    const [ErrorConfirmPassword, setErrorConfirmPassword] = useState('');

    // continue button state
    const handleRegistration = (e) => {
        e.preventDefault();
        if (!clientName) {
            setErrorClientName('Enter your name');
        }
        if (!email) {
            setErrorEmail('Enter your Email or Phone Number');
        }
        if (!password) {
            setErrorPassword('Enter your Password');
        }
        if (!confirmPassword) {
            setErrorConfirmPassword('Please Re-Enter your Password');
        }
    }

    const handleCombinedChange = (e) => {
        handleInputChange(e);
        handleEmail_Phone(e);
    };

    // 
    // handle functions
    const handleName = (e) => {
        setClientName(e.target.value)
        setErrorClientName("")
    }

    const handleEmail_Phone = (e) => {
        setEmail(e.target.value)
        setErrorEmail("")
    }

    // Function to handle password input change
    const handlePasswordChange = (value, e) => {
        setPassword(e.target.value);
        const strength = calculatePasswordStrength(value);
        setPasswordStrength(strength);
        setPasswordMismatch(false);
        setIsPasswordTyping(true);
        setErrorPassword('');
    };

    // Confirm Password Input
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        if (value !== password) {
            setPasswordMismatch(true);
            setErrorConfirmPassword('Passwords do not match');
        } else {
            setPasswordMismatch(false);
            setErrorConfirmPassword(''); // Clear error message when passwords match
        }
    };


    const getPasswordStrengthColor = () => {
        switch (passwordStrength) {
            case 'weak':
                return '#ff5a57';
            case 'medium':
                return '#fcea47';
            case 'strong':
                return '#2ff775';
            default:
                return 'Password must be minimum 6 characters';
        }
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

    // Function to toggle password visibility based on the input field
    const togglePasswordVisibility = (field) => {
        if (field === 1) {
            setShowPassword1(!showPassword1);
        } else if (field === 2) {
            setShowPassword2(!showPassword2);
        }
    };


    // Function to calculate password strength
    const calculatePasswordStrength = (value) => {
        const strength = value.length >= 6 ? 'strong' : value.length >= 4 ? 'medium' : 'weak';
        return strength;
    };







    return (
        <div className='w-full'>
            <div className='w-full bg-gray-100 pb-20'>
                {/* Registration form */}
                <form className="w-[370px] mx-auto flex flex-col items-center">
                    {/* Logo */}
                    <img className='w-40 Hover' src={darkLogo} alt="" />

                    {/* Registration container */}
                    <div className='w-full border border-zinc-200 rounded-lg drop-shadow-lg p-8 bg-white '>
                        <h2 className='font-titleFont text-2xl font-bold mb-4 text-center'>Create Account</h2>

                        {/* Form inputs */}
                        <div>
                            <div className='flex flex-col gap-2 py-1 pt-6'>
                                {/* Name input */}
                                <p className='font-semibold  text-gray-600'>Your name</p>
                                <input onChange={handleName} className="w-full py-1 border border-zinc-300 shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100" type="text-sm" placeholder='First and Last name' />
                                {
                                    ErrorclientName && (
                                        <p className='text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{ErrorclientName}</p>
                                    )
                                }
                            </div>

                            {/* Email or phone number input */}
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
                                    className="w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100"
                                    type={contactMethod === 'email' ? 'email' : 'tel'}
                                    pattern={contactMethod === 'phone' ? '[0-9]*' : undefined}
                                    placeholder={contactMethod === 'email' ? 'Enter your email' : 'Enter your phone number'}
                                    value={phoneNumber}
                                    onChange={handleCombinedChange}
                                />
                                {contactMethod === 'phone' && showErrorMessage && (
                                    <p className="text-red-500 text-xs">Please enter only numbers for the phone number.</p>
                                )}
                                {contactMethod === 'email' && Erroremail && (
                                    <p className='text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{Erroremail}</p>
                                )}
                            </div>

                            {/* Password input with visibility toggle */}
                            <div className='flex flex-col gap-2 pt-6 relative'>
                                {/* Tooltip for password field */}
                                <label className='text-gray-500'>
                                    <span className='font-semibold text-gray-600'>Password</span>
                                </label>
                                <div className="relative">
                                    <Tooltip
                                        title={
                                            <span>
                                                <span style={{ color: getPasswordStrengthColor() }} className=' font-bold text-md p-1 rounded-md'>
                                                    {passwordStrength}
                                                </span>
                                            </span>
                                        }
                                        arrow
                                        placement="right"
                                    >
                                        <input
                                            className={`w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100  Hover cursor-pointer ${passwordStrength === 'weak' ? 'border-red-500' : passwordStrength === 'medium' ? 'border-yellow-500' : 'border-green-500'}`}
                                            placeholder='At least 6 characters'
                                            type={showPassword1 ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => handlePasswordChange(e.target.value, e)}
                                        />

                                        <input
                                            type="checkbox"
                                            className="absolute right-2 top-4 transform -translate-y-1/2 cursor-pointer opacity-0 w-6 h-6 text-gray-600"
                                            onChange={() => togglePasswordVisibility(1)}
                                            checked={showPassword1}
                                            id="togglePassword1"
                                        />
                                        <label
                                            htmlFor="togglePassword1"
                                            className="absolute right-2 top-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                        >
                                            {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                        </label>
                                    </Tooltip>
                                    <p className="text-xs text-gray-500 p-1"><span className='italic text-blue-500 font-titleFont font-extrabold text-base'>i  </span> Password must be minimum 6 characters</p>

                                    {
                                        ErrorPassword && (
                                            <p className='text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{ErrorPassword}</p>
                                        )
                                    }

                                </div>
                            </div>

                            {/* Confirm password input with visibility toggle */}
                            <div className='flex flex-col gap-2 pt-6 relative'>
                                <label className='text-gray-500'>
                                    <span className='font-semibold text-gray-600'>Confirm password</span>
                                </label>

                                <div className="relative">
                                    {/* Confirm password Input */}

                                    <input
                                        className={`w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100 Hover cursor-pointer ${passwordMismatch ? 'border-red-500' : ''}`}
                                        type={showPassword2 ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => handleConfirmPasswordChange(e)}
                                    />
                                    {
                                        ErrorConfirmPassword && (
                                            <p className='text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{ErrorConfirmPassword}</p>
                                        )
                                    }

                                    {/* Toggle Confirm password Visibility */}
                                    <input
                                        type="checkbox"
                                        className="absolute right-2 top-4 transform -translate-y-1/2 cursor-pointer opacity-0 w-6 h-6 text-gray-600"
                                        onChange={() => togglePasswordVisibility(2)}
                                        checked={showPassword2}
                                        id="togglePassword2"
                                    />
                                    <label
                                        htmlFor="togglePassword2"
                                        className="absolute right-2 top-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                    >
                                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                    </label>
                                </div>
                            </div>

                            {/* Continue button */}
                            <button onClick={handleRegistration} className='w-full mt-10 px-8 bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-105 drop-shadow-lg'>
                                Continue
                            </button>
                        </div>
                        {/* Terms and Conditions */}
                        <div>
                            <p className='text-xs text-gray-600 pt-6 group'>
                                By Continuing you agree to <span className='font-semibold'>App`s </span>
                                <span className="text-blue-500 cursor-pointer  hover:underline">Conditions of Use {""}</span>and
                                <span className="text-blue-500 cursor-pointer  hover:underline"> Privacy Notice.</span>
                            </p>
                        </div>
                        <div className="mt-6 text-start">
                            <p className="text-gray-600 text-xs">Already have an Account? <Link to="/signIn"><span className="text-blue-500 cursor-pointer font-bold hover:underline">Sign in</span></Link></p>
                        </div>
                        <div className="mt-1 text-start">
                            <p className="text-gray-600 text-xs font-semibold">Buying for work? <span className="text-blue-500 cursor-pointer font-light hover:underline">Create a free business account</span></p>
                        </div>
                    </div>
                </form>
            </div>
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
        </div >
    );
}

export default Registration;
