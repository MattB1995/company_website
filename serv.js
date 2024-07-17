const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {readFile} = require('fs');

const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(__dirname));


app.get('/', (request, response) => {
    readFile('./index.html','utf8', (err, html) => {
        response.send(html)
        if(err) {
            response.status(500).send('sorry, out of order')
        }
    })
});

app.listen(port);