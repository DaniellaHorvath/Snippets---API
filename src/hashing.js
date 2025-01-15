const bcrypt = require('bcrypt');

let myPassword = 'password123';

// hash the password - hash or hashSync
// workfactor is 10 
// 10 = 2^10 rounds of hashing

console.time('Hashing');
let hashedPassword = bcrypt.hashSync(myPassword, 11)
console.timeEnd('Hashing');

console.log(`The hased data is ${hashedPassword}`);
// returns a hashed password - $2b$10$hCmoTmiI3rLq6fJNTS/Mz.A.5GyH/c3oxhzD9V3l7Ua02EETIky82
let savedPassword = '$2b$10$hCmoTmiI3rLq6fJNTS/Mz.A.5GyH/c3oxhzD9V3l7Ua02EETIky82';

// Login

let isValid = bcrypt.compareSync(myPassword, savedPassword);

console.log(`Password is valid: ${isValid}`);
// returns true
