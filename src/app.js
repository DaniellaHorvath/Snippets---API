const express = require('express');
const data = require('./seedData.json')
const app = express();

// To serve static content (like an index.html file), we use the express.static() 
// method with the location of the file(s) to serve.
// The app.usemethod is used to specify middleware that should be executed for every incoming request, 
// regardless of the specific route. For serving static files, it takes the express.static() middleware 
// function that specifies the location of a static file to serve.
// app.use('/myHTML', express.static('public'));

app.use(express.json());

// GET snippets
app.get('/snippets', (req,res) => {
  res.send(data);
})

// GET /snippets/:id - to get a specific snippet
app.get('/snippets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const snippet = data.find((snippet) => snippet.id === parseInt(id));

  if(snippet){
    res.send(snippet);
  }else{
    res.status(404).send('Snippet not found');
  }
})

// POST snippets - to add a new snippet
app.post('/snippets', (req, res) => {
  const newSnippets = req.body;
  data.push(newSnippets);

  res.status(201).json(data);
  
})

// PUT /snippets/:id - to edit a specific snippet
app.put('/snippets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const snippet = data.find((snippet) => snippet.id === parseInt(id));
  const updatedSnippets = req.body

  if(snippet){
    const index = data.indexOf(snippet);
    data[index] = updatedSnippets;
    res.send(updatedSnippets);
  }else{
    res.status(404).send('Snippet not found');
  }
})

// DELETE /snippets/:id - to delete a specific snippet
app.delete('/snippets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const snippet = data.find((snippet) => snippet.id === parseInt(id));

  if(snippet){
    const index = data.indexOf(snippet);
    data.splice(index, 1);
    res.send('Snippet deleted');
  }else{
    res.status(404).send('Snippet not found');
  }
})


// res.send, res.json, res.render are all methods that can be used to send a response to the client.

// To get the snippets in the browser, we can use the URL http://localhost:5001/snippets. (Don't forget to run the server!)
// To run the server, use the command node server.js. This will start the server on port 5001.
// The route path can be any string, but it should be unique to avoid conflicts with other routes.


// Callenge 1 - GET /random
app.get("/random", (req, res) => {
  // Write your code here
  const randomNumber = Math.floor(Math.random() * 8);
  const randomSnippet = data[randomNumber];
  res.send(randomSnippet);
});


// Challenge 2 - GET /flipcoin
app.get('/flipcoin', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 2);
  if(randomNumber === 0){
    return res.send('Heads');
  } else{
    return res.send('Tails');
  }
  // Same as above
  // const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
  // res.send(outcome);
})

// Challenge 3 - basic CRUD operations
app.get('/', (req, res) => {
  res.send('Hello PostMaaaan!');
})

app.post('/', (req, res) => {
  res.send('Got a POST request!')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user!');
})

module.exports = app;

