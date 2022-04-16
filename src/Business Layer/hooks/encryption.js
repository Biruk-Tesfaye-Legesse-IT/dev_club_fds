var CryptoJS = require("crypto-js");

function encrypt() {
    var ciphertext = CryptoJS.AES.encrypt('text', "secret key 123");
    console.log(ciphertext.toString());
    return ciphertext.toString();
}

function decrypt(text) {
    var bytes = CryptoJS.AES.decrypt(text, "secret key 123");
    return bytes.toString(CryptoJS.enc.Utf8);
}

export default {
    encrypt,
    decrypt
};