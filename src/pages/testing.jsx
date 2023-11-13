import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons'; // Import icons from Material-UI

function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col gap-2 py-4 relative'>
            <p className='text-gray-500'>
                <span className='font-semibold text-gray-600'>Password</span>
                {showPassword ? (
                    <VisibilityOff
                        className='absolute right-2 top-1/3 transform -translate-y-1/2 cursor-pointer'
                        onClick={togglePasswordVisibility}
                    />
                ) : (
                    <Visibility
                        className='absolute right-2 top-1/3 transform -translate-y-1/2 cursor-pointer'
                        onClick={togglePasswordVisibility}
                    />
                )}
            </p>
            <input
                className="w-full lowercase py-1 border border-zinc-300 shadow-inner rounded-md Hover px-2 text-base outline-none focus-within:border-app_yellow focus-within:shadow-appShadow duration-100"
                type={showPassword ? 'text' : 'password'}
            />
        </div>
    );
}

export default PasswordInput;
