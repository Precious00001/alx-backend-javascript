const express = require('express');

// Create an Express application
const app = express();

// Set the port for the server to listen on
const port = 1245;

// Define a route for the root path ('/')
// with a callback to handle GET requests
app.get('/', (req, res) => {
  // Respond with the text 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// Start the server and make it listen
// on the specified port
app.listen(port);

// Export the app to make it available for
// testing or other modules
module.exports = app;

