const cryptoJS = require('crypto-js');  

// Example message and secret key
const message = 'Hello, this is a secret message!';
const secretKey = 'mySecretKey123';

// AES Encryption
const encryptedMessage = cryptoJS.AES.encrypt(message, secretKey).toString();
console.log(`Encrypted message: ${encryptedMessage}`);
// returns a string of encrypted message 
// Encrypted message: U2FsdGVkX19qze2FXVk2sO40b5FmeC58KzIzSowRo+HFupSY+8nPNzEm3G9zby39Ir7QBSDoRfPqiYr5ynAiVA==

// AES Decryption
const bytes = cryptoJS.AES.decrypt(encryptedMessage, secretKey);
const decryptedMessage = bytes.toString(cryptoJS.enc.Utf8);
console.log(`Decrypted message: ${decryptedMessage}`);
// returns the decrypted message
// Decrypted message: Hello, this is a secret message!