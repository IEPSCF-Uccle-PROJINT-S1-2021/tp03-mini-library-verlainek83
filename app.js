const books = require('./books');

console.log(`list of books ${books.list(9)}`);
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(4242, () => {
    console.log('Express.js server listening on http://127.0.0.1:4242/');
});