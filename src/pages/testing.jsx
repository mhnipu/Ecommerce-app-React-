const handleCombinedChange = (e) => {
    const value = e.target.value;
    if (contactMethod === 'email') {
        setEmail(value);
        setErrorEmail('');
    } else if (contactMethod === 'phone') {
        if (!isNaN(value) && value.length <= 15) {
            setPhoneNumber(value);
            setShowErrorMessage(false);
        } else {
            setShowErrorMessage(true);
        }
    }
};



const phoneNumberValidation = (phoneNumber) => {
    // Implement your phone number validation logic here
    // For example, checking if the phone number adheres to a specific format or length
    return /^\d{10,15}$/.test(phoneNumber); // Validates if the number is between 10 to 15 digits
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
