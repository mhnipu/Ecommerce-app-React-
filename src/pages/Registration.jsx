/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { darkLogo } from '../assets';
import { Link } from 'react-router-dom';
import { Tooltip, LinearProgress } from '@mui/material';

const Registration = () => {
    const [contactMethod, setContactMethod] = useState('email');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    // State variables for password visibility

    const [confirmPassword, setConfirmPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordTyping, setIsPasswordTyping] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
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
    // Function to handle password input change
    const handlePasswordChange = (value) => {
        setPassword(value);
        const strength = calculatePasswordStrength(value);
        setPasswordStrength(strength);
        setPasswordMismatch(false);
        setIsPasswordTyping(true);
    };
    // Function to handle confirm password input change
    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        setPasswordMismatch(value !== password);
        // Check if passwords match
        if (value !== password) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
        }
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
                                <input className="w-full py-1 border border-zinc-300 shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100" type="text" />
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
                                    onChange={handleInputChange}
                                />
                                {contactMethod === 'phone' && showErrorMessage && (
                                    <p className="text-red-500 text-xs">Please enter only numbers for the phone number.</p>
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
                                            type={showPassword1 ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => handlePasswordChange(e.target.value)}
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
                                    <p className="text-xs text-gray-500 p-1">Password must be minimum 6 characters</p>

                                    {/* Progress bar indicating password strength */}
                                </div>
                            </div>

                            {/* Confirm password input with visibility toggle */}
                            <div className='flex flex-col gap-2 pt-6 relative'>
                                <label className='text-gray-500'>
                                    <span className='font-semibold text-gray-600'>Confirm password</span>
                                </label>

                                <div className="relative">
                                    {/* Confirm password Input */}
                                    <Tooltip title={passwordMismatch ? 'Passwords do not match' : ''} arrow placement="right">
                                        <input
                                            className={`w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100 Hover cursor-pointer ${passwordMismatch ? 'border-red-500' : ''}`}
                                            type={showPassword2 ? 'text' : 'password'}
                                            value={confirmPassword}
                                            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                                        />
                                    </Tooltip>
                                    {/* Toggle Confirm password Visibility */}
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

                            {/* Continue button */}
                            <button onClick={(e) => e.preventDefault()} className='w-full mt-10 px-8 bg-gradient-to-tr from-yellow-400 to-yellow-300 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-600 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-500 py-1.5 rounded-md shadow-md hover:shadow-lg focus:outline-none transform transition-transform hover:scale-105 drop-shadow-lg'>
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
                    </div>
                </form>
            </div>
        </div >
    );
}

export default Registration;
