const express = require('express');
const fs = require('fs');

// Function to count students based on the data in the provided CSV file
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously with utf-8 encoding
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      // Handle read errors
      if (err) return reject(Error('Cannot load the database'));

      // Split data into lines and exclude the header
      const lines = data.split('\n').slice(1, -1);
      // Extract the header
      const header = data.split('\n').slice(0, 1)[0].split(',');
      // Find the indices of 'firstname' and 'field'
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');
      // Dictionaries to count fields and store lists of students
      const fields = {};
      const students = {};
      // Object to store all data
      const all = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
        fields[list[idxFd]] += 1;
        if (!students[list[idxFd]]) students[list[idxFd]] = '';
        students[list[idxFd]] += students[list[idxFd]]
          ? `, ${list[idxFn]}`
          : list[idxFn];
      });

      // Populate the 'all' object with the results
      all.numberStudents = `Number of students: ${lines.length}\n`;
      all.listStudents = [];
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          all.listStudents.push(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }

      // Resolve the promise with the 'all' object
      return resolve(all);
    });
  });
}

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

// Define a route for '/students' with a callback to handle GET requests
app.get('/students', (req, res) => {
  // Write a response indicating the purpose of the route
  res.write('This is the list of our students\n');
  
  // Call the countStudents function and handle the promise
  countStudents(process.argv[2])
    .then((data) => {
      // Write the results to the response
      res.write(data.numberStudents);
      res.end(data.listStudents.join('\n'));
    })
    .catch((err) => {
      // Handle errors by ending the response with an error message
      res.end(err.message);
    });
});

// Start the server and make it listen on the specified port
app.listen(port);

// Export the app to make it available for testing or other modules
module.exports = app;

