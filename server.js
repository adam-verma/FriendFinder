// Dependencies
const express = require('express');
const path = require('path');

// Require the routes' files so data can be imported
let apiRoutes = require('./app/routing/apiRoutes');
let htmlRoutes = require('./app/routing/htmlRoutes');

// Sets up the Express App
let app = express();
let PORT = process.env.PORT || 3000;

// Handles the data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the routes' files 
app.use(apiRoutes);
app.use(htmlRoutes);

