const express = require('express');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const helmet = require("helmet");
const path = require('path');
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');

// Connection to mango database (connection string to set in .env)
mongoose.connect(process.env.mongodbConnection)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

// Create "Express" app
const app = express();

// Set CORS rules : allow GET, POST, PUT, DELETE requets
app.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow access from anywhere
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Allow specific html headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Allow HTTP verbs
    next();
});

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());

// Specify which route file to use for requests on "/api/auth"
app.use('/api/auth', userRoutes);

// Specify which route file to use for requests on "/api/sauces"
app.use('/api/sauces', sauceRoutes);

// Specify path for "images" folder
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;