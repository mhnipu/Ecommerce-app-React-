import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { darkLogo } from '../assets';
import { Tooltip, LinearProgress } from '@mui/material';

const Registration = () => {
    const [contactMethod, setContactMethod] = useState('email');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
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
            setShowErrorMessage(true);
        } else {
            setShowErrorMessage(false);
            setPhoneNumber(e.target.value);
        }
    };

    const togglePasswordVisibility = (field) => {
        if (field === 1) {
            setShowPassword1(!showPassword1);
        } else if (field === 2) {
            setShowPassword2(!showPassword2);
        }
    };

    const calculatePasswordStrength = (value) => {
        const strength = value.length >= 6 ? 'strong' : value.length >= 4 ? 'medium' : 'weak';
        return strength;
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
        const strength = calculatePasswordStrength(value);
        setPasswordStrength(strength);
        setPasswordMismatch(false);
        setIsPasswordTyping(true);
    };

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        setPasswordMismatch(value !== password);
    };

    return (
        <div>
            <div className='flex flex-col gap-2 pt-4'>
                <div className="flex items-center gap-4 ">
                    <input
                        type="radio"
                        id="emailOption"
                        name="contactMethod"
                        value="email"
                        checked={contactMethod === 'email'}
                        onChange={() => setContactMethod('email')}
                    />
                    <label htmlFor="emailOption" className='font-semibold  text-gray-600 cursor-pointer'>Email</label>

                    <input
                        type="radio"
                        id="phoneOption"
                        name="contactMethod"
                        value="phone"
                        checked={contactMethod === 'phone'}
                        onChange={() => setContactMethod('phone')}
                    />
                    <label htmlFor="phoneOption" className='font-semibold  text-gray-600 cursor-pointer'>Phone Number</label>
                </div>
                <input
                    className={`w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100 ${
                        contactMethod === 'email' ? 'text' : 'tel'
                    }`}
                    placeholder={contactMethod === 'email' ? 'Enter your email' : 'Enter your phone number'}
                    onChange={handleInputChange}
                    value={phoneNumber}
                />
                {showErrorMessage && <p className="text-xs text-red-500 p-1">Only numbers are allowed for phone number</p>}
            </div>

            <div className='flex flex-col gap-2 pt-6 relative'>
                <label className='text-gray-500'>
                    <span className='font-semibold text-gray-600'>Password</span>
                </label>
                <div className="relative">
                    <Tooltip
                        title={
                            <span>
                                <span style={{ color: getPasswordStrengthColor() }} className='font-bold text-md p-1 rounded-md'>
                                    {passwordStrength}
                                </span>
                            </span>
                        }
                        arrow
                        placement="right"
                    >
                        <input
                            className={`w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100 Hover cursor-pointer ${
                                showPassword1 ? 'text' : 'password'
                            }`}
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
                </div>
            </div>

            <div className='flex flex-col gap-2 pt-6 relative'>
                <label className='text-gray-500'>
                    <span className='font-semibold text-gray-600'>Confirm password</span>
                </label>
                <div className="relative">
                    <Tooltip title={passwordMismatch ? 'Passwords do not match' : ''} arrow placement="right">
                        <input
                            className={`w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100 Hover cursor-pointer ${
                                isPasswordTyping ? '' : 'pointer-events-none'
                            } ${passwordMismatch ? 'border-red-500' : ''}`}
                            value={confirmPassword}
                            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                            type={showPassword2 ? 'text' : 'password'}
                            disabled={!isPasswordTyping}
                        />
                    </Tooltip>
                    <input
                        type="checkbox"
                        className="absolute right-2 top-2/4 transform -translate-y-1/2 cursor-pointer opacity-0 w-6 h-6 text-gray-600"
                        onChange={() => togglePasswordVisibility(2)}
                        checked={showPassword2}
                        id="togglePassword2"
                        disabled={!isPasswordTyping}
                    />
                    <label
                        htmlFor="togglePassword2"
                        className="absolute right-2 top-2/4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                    >
                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Registration;
