"use strict";
var cookieParser = require('cookie-parser');
var express = require('express');
var cors = require('cores');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Issue = require('./models/issue');

var app = express();

// Create modular routing
const router = express.Router();

// use middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// connect to mongoDB with URL. TODO: Set up MongoDB instance to connect to
mongoose.connect('');

const connection = mongoose.connection;

// Event listener for opening connection to DB
connection.once('open', () => {
    console.log('Connection to MongoDB has been established successfully');
});

// Route to find all issues
router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issues);
        }
    })
});

// Route to find issue by id
router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issue);
        }
    });
});

// Route to add issue to database
router.route('/issues/add').post((req, res) => {
    // Create a new issue with data already in body
    let issue = new Issue(req.body);
    issue.save().then((issue) => {
        res.status(200).json({'issue': 'Added successfully'});
    }).catch((err) => {
        res.status(400).send('Failed to create new record');
    });
});

app.use('/', router);

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