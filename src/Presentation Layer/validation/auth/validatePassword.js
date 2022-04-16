function validatePassword(password) {
    // var validRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/

    var validRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/

    if (password.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}
export default validatePassword;

// A#a01234

// Start anchor
// Ensure string has one uppercase letters.
// Ensure string has one special case letter.
// Ensure string has one digits.
// Ensure string has one lowercase letters.
// Ensure string is of length 8.



// Start anchor
// Ensure string has two uppercase letters.
// Ensure string has one special case letter.
// Ensure string has two digits.
// Ensure string has three lowercase letters.
// Ensure string is of length 8.