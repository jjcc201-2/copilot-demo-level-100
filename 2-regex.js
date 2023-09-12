// validate a phone number
function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

console.log(validatePhone('1234567890')); // true
console.log(validatePhone('123456789')); // false