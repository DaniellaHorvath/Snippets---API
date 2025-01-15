# Activity Overview


## Files in the repository

### <div style="background-color: grey; padding: 10px;">1. app.js</div> 

**GOAL:** Create endpoints to POST code snippets and then GET them back.

**User Stories (Snippets)**
As a user, I can add a snippet to the data store, so that I can look it up again when I need it
As a user, I can request a snippet by its ID, so that I can see the snippet again

**Functional Requirements**
1. Users can make POST request to /snippets to create a new snippet
2. Users can make a GET request to /snippets to get all the snippets currently in the data store
3. Users can make a GET request to e.g. /snippets/3 to retrieve the snippet with the ID of 3

**Choosing a Framework**
- JavaScript & Typescript	Express.js: A fast and minimalist web framework that provides a robust set of features for building APIs.	
- Express.js documentation - https://expressjs.com/

Seed Data
- Available in the src folder - seeddata.json 

Challenge 1 - GET /random
 - Random Snippet - generates a random snippet from the seed data

Challenge 2 - GET /flipcoin
- Flipcoin - get a random number between 0 and 1. If the number is 0, return "Heads", else return "Tails".

Challenge 3 - basic CRUD operations

## Data Security (Salting & Hashing)

### <div style="background-color: grey; padding: 10px;">2. encryption.js</div> 

This file demonstrates how to use crypto-js to perform encryption and decryption of data. Encryption transforms plain text into a scrambled format that can only be reverted back to the original data using a specific key.

**Purpose: Encryption is used to securely send sensitive data over networks. Only those with the correct decryption key can view the original data.**

In this file, you will find an example of:

 - How to encrypt a message.
 - How to decrypt an encrypted message back to the original text.

### <div style="background-color: grey; padding: 10px;">3. hashing.js</div>  

This file demonstrates how to use bcrypt for hashing. Bcrypt is a password-hashing library that helps to securely hash user passwords, making them difficult to crack.

Purpose: Hashing is used to convert sensitive data, like passwords, into a fixed-length string, which is irreversible. This is useful for storing passwords securely.

In this file, you will find an example of:

 - How to hash a password.
 - How to compare a hashed password with a plain text one.

**Challenge - register: Creates new user in DB**
Directions: Complete the following steps:   

1. Import bcrypt at the top of the file
2. Declare an async function register that accepts username and password as parameters
3. Use bcrypt.hash() to hash the password
4. Save the user (username and hashed password) to the User model.
 - NOTE: The new record should NOT have the plaintext password.
     register('mimi', 'memyselfandI1');
        // user gets created in DB
        // i.e. subsequent User.findAll() should return the new record.
        // new record should NOT have the plaintext password

login: Verifies username and password against user in DB 
1. Declare an async function login that accepts username and password as parameters
2. Find the user (by username) in the db
3. Use bcrypt.compare() to compare the plaintext password to the hashed password in the DB.
4. If the hashed password matches, return the string Success. Otherwise, return Failed.

## Prerequisites
Before running the examples, make sure to install the required dependencies:
```bash
    npm install bcryptjs crypto-js