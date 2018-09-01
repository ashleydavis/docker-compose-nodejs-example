'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST, err => {
    if (err) {
        console.error("Error starting server.");
        console.error(err && err.stack || err);
    }
    else {
        console.log(`Running on http://${HOST}:${PORT}`);
    }
});
