// validate a phone number
function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

// validate an email address
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

console.log(validatePhone('1234567890')); // true
console.log(validatePhone('123456789')); // false
console.log(validatePhone('12345678901')); // false
console.log(validatePhone('123456789a')); // false
console.log(validatePhone('1234567890a')); // false
console.log(validatePhone('1234567890 ')); // false


console.log(validateEmail('a@a.com')); // true
console.log(validateEmail('asfasfafssaasgcom')); // false