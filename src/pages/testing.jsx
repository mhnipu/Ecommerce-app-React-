// ... (Existing imports and initializations)

const Registration = () => {
    // Existing state hooks and functions...

    // Simplified handleRegistration function
    const handleRegistration = (e) => {
        e.preventDefault();

        // Validate client name
        setErrorClientName(clientName ? '' : 'Enter your name');

        // Validate email or phone number based on the selected contact method
        if (contactMethod === 'email') {
            setErrorEmail(!email ? 'Enter your Email' : emailValidation(email) ? '' : 'Please enter a valid email');
            setErrorEmail(email === email.toLowerCase() ? '' : 'Email should be in lowercase');
        } else if (contactMethod === 'phone') {
            setShowErrorMessage(!phoneNumber ? true : !phoneNumberValidation(phoneNumber));
        }

        // Validate password and confirmation
        setErrorPassword(!password ? 'Enter your Password' : password.length >= 6 ? '' : 'Password must be at least 6 characters');
        setErrorConfirmPassword(!confirmPassword ? 'Re-enter your Password' : confirmPassword === password ? '' : 'Passwords do not match');

        // Process registration if all validations pass
        if (clientName && ((contactMethod === 'email' && !Erroremail) || (contactMethod === 'phone' && !showErrorMessage)) && !ErrorPassword && !ErrorConfirmPassword) {
            console.log(clientName, contactMethod === 'email' ? email.toLowerCase() : phoneNumber, password, confirmPassword);
            resetFormFields();
        }
    };

    // Function to reset form fields after successful submission
    const resetFormFields = () => {
        setClientName('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');
        setErrorConfirmPassword('');
    };

    // Function to calculate password strength
    const calculatePasswordStrength = (value) => {
        return value.length >= 6 ? 'strong' : value.length >= 4 ? 'medium' : 'weak';
    };

    // Other existing functions...

    return (
        <div className='w-full'>
            {/* ... (Existing JSX structure) */}
            <div className='w-full bg-gray-100 pb-20'>
                <form className="w-[370px] mx-auto flex flex-col items-center" onSubmit={handleRegistration}>
                    {/* ... (Existing form elements) */}
                    {/* Password input with visibility toggle */}
                    <div className='flex flex-col gap-2 pt-6 relative'>
                        <label className='text-gray-500'>
                            <span className='font-semibold text-gray-600'>Password</span>
                        </label>
                        <div className="relative">
                            {/* Tooltip for password field */}
                            <input
                                className={`w-full py-1 border border-zinc-300 shadow-inner rounded-md px-2 text-base outline-none focus-within:shadow-appShadow duration-100 Hover cursor-pointer ${passwordStrength === 'weak' ? 'border-red-500' : passwordStrength === 'medium' ? 'border-yellow-500' : 'border-green-500'}`}
                                placeholder='At least 6 characters'
                                type={showPassword1 ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => handlePasswordChange(e.target.value, e)}
                            />
                            {/* ... (Existing elements) */}
                            {/* Password strength indicator */}
                            <p className="text-xs text-gray-500 p-1">
                                <span className='italic text-blue-500 font-titleFont font-extrabold text-base'>i</span>
                                {passwordStrength === 'strong' && ' Strong Password'}
                                {passwordStrength === 'medium' && ' Medium Password'}
                                {passwordStrength === 'weak' && ' Weak Password'}
                                {passwordStrength === '' && ' Password must be minimum 6 characters'}
                            </p>
                            {/* ... (Existing elements) */}
                        </div>
                        {/* ... (Existing elements) */}
                    </div>
                    {/* ... (Existing elements) */}
                </form>
            </div>
            {/* ... (Existing JSX structure) */}
        </div>
    );
}

export default Registration;
