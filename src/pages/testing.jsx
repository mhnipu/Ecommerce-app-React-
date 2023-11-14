// Password input with visibility toggle
<input
    // ...other attributes
    onChange={(e) => handlePasswordChange(e.target.value, e)} // Pass both value and event
/>

// Confirm password input with visibility toggle
<input
    // ...other attributes
    onChange={(e) => handleConfirmPasswordChange(e)} // Pass only the event
/>
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
