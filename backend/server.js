"use strict";
var cookieParser = require('cookie-parser');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Issue = require('./models/issue');
var issueRouter = require('./routes/issue');

var app = express();

// Create modular routing
const router = express.Router();

// use middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// connect to mongoDB with URL.
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

const connection = mongoose.connection;

// Event listener for opening connection to DB
connection.once('open', () => {
    console.log('Connection to MongoDB has been established successfully');
});

app.use('/', issueRouter);

// Route to set cookie
app.get('/cookies', (req, res) => {
    var cookie_name = 'login';
    res.cookie(cookie_name, 'cookie_value', { maxAge: 9999999 }).send('cookie is set');
}); 

// Route to clear cookies
app.get('/clearcookies', (req, res) => {
    res.clearCookie('login');
    res.send('cookie deleted');
});

// Event listener
app.listen(3000, () => {
    console.log('Listening on port 3000');
});