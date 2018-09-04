'use strict';

const express = require('express');
const mongodb = require('mongodb');
const fs = require('fs');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

/*async*/ function startServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, err => {
            if (err) {
                reject(err);
            }
            else {
                console.log(`Running on http://${HOST}:${PORT}`);
                resolve();
            }
        });
    });
}

async function main() {

    const client = await mongodb.MongoClient.connect("mongodb://db:27017");
    const db = client.db("mydb");

    app.get('/', (req, res) => {
        res.send('Hello world\n');
    });

    app.get('/data', (req, res) => {
        const collection = db.collection("mycollection");
        collection.find().toArray()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.error("Error retreiving data.");
                console.error(err && err.stack || err);

                res.sendStatus(500);
            });
    });

    await startServer();    
}

main() 
    .then(() => console.log("Online"))
    .catch(err => {
        console.error("Failed to start!");
        console.error(err && err.stack || err);
    });

fs.writeFileSync("/persist/example.txt", "This is an example of data generated in the container that is persisted.");