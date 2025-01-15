const app = require('./src/app');
const port = 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// To run the server, use the command node server.js. This will start the server on port 5001.
// Server runs on port 5001 - http://localhost:5001/myHTML/