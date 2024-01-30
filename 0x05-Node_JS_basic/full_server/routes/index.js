const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Create an instance of the Express application
const app = express();

// Define route handlers for different endpoints
app.get('/', (request, response) =>
	AppController.getHomepage(request, response));
app.get('/students', (request, response) =>
	StudentsController.getAllStudents(request, response));
app.get('/students/:major', (request, response) =>
	StudentsController.getAllStudentsByMajor(request, response));

// Export the configured Express application
module.exports = app;
