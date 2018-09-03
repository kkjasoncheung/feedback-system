var express = require('express');

const app = express();

// Default request
app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Event listener
app.listen(3000, () => {
    console.log('Listening on port 3000');
});