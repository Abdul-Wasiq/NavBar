// 1. Cannot be empty:


if (!formData.name) {
    setError('Name cannot be empty')
    return
}

// 2. Minimum length:

 
if (formData.password.length < 8) {
    setError('Password must be at least 8 characters')
    return
}

// 3. Must contain uppercase:

 
if (!/[A-Z]/.test(formData.password)) {
    setError('Password must have at least one uppercase letter')
    return
}

// 4. Must contain a number:

 
if (!/[0-9]/.test(formData.password)) {
    setError('Password must have at least one number')
    return
}

// 5. Must contain special character:

 
if (!/[!@#$%^&*]/.test(formData.password)) {
    setError('Password must have at least one special character')
    return
}

// 6. Email must have @ and . :

 
if (!formData.email.includes('@') || !formData.email.includes('.')) {
    setError('Please enter a valid email')
    return
}

// 7. Year must be 4 digits:

 
if (formData.year.length !== 4) {
    setError('Year must be 4 digits')
    return
}

// 8. Year cannot be in future:

 
if (parseInt(formData.year) > new Date().getFullYear()) {
    setError('Year cannot be in the future')
    return
}

// 9. Must be a number:

 
if (isNaN(formData.year)) {
    setError('Year must be a number')
    return
}

// 10. Phone must be 11 digits:

 
if (formData.phone.length !== 11) {
    setError('Phone must be 11 digits')
    return
}
