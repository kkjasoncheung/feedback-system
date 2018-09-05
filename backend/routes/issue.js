// Import dependencies
var express = require('express');
var mongoose = require('mongoose');
var Issue = require('../models/issue');

// Create router
var router = express.Router();

// route /issues, gets all issues from db
router.get('/', (req, res) => {
    console.log('Show all issues');
    Issue.IssueModel.find({}, (err, issues) => {
        if (err) {
            res.status(400).send('Unable to show issues');
        } else {
            res.status(200).json(issues);
        }
    });
});

// Route to find issue by id
router.route('/:id').get((req, res) => {
    Issue.IssueModel.findById(req.params.id, (err, issue) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issue);
        }
    });
});

// Route to add issue to database
router.route('/add').post((req, res) => {
    // Create a new issue with data already in body
    // let issue = new Issue(req.body);
    Issue.IssueModel.create({
        title: req.body.title,
        response: req.body.response,
        description: req.body.description,
        severity: req.body.severity
    }, (err, issue) => {
        if (err) {
            res.status(400).json('Issue was not added to database');
        } else {
            res.status(200).json(issue);
        }
    });
});

// Route to update existing issues
router.route('/update/:id').put((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue) {
            return next(new Error('Could not find document'));
        } else {
            // Update values
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then((issue) => {
                res.json('Update done');
            }).catch((err) => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// Route to delete issue from database
router.route('/delete/:id').delete((req, res) => {
    Issue.findByIdAndRemove(req.params.id, (err, issue) => {
        if (!err) {
            // call the next middleware function
            res.json(err);
        } else {
            // Delete issue from database
            res.send(`Successfully removed ${issue.id}`);
        }
    });
});

// Export module level router
module.exports = router;