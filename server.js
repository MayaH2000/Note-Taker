// Create all the needed dependencies and routes
const express = require('express');
const apiRoute = require('./routes/api-route');
const htmlRoute = require('./routes/html-route');
const PORT = process.env.PORT || 3001;
const app = express();
// Sets up the middleware to parse json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// Sets up the routes to the routes folder
app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT);