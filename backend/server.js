var cookieParser = require('cookie-parser');
var express = require('express');

var app = express();
app.use(cookieParser());

// Default request
app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Route to set cookie
app.get('/cookies', (req, res) => {
    var cookie_name = 'login';
    res.cookie(cookie_name, 'cookie_value', {maxAge: 9999999}).send('cookie is set');
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