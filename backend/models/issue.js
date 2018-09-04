// Data model for issue
var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create the Schema
let Issue = new Schema({
    title: {
        type: String
    },
    reponse: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

var IssueModel = mongoose.model('Issue', Issue);
// Export the schema as a model
module.exports.IssueModel = IssueModel;