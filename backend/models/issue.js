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

// Export the schema as a model
export default mongoose.model('Issue', Issue);