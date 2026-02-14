//set up and configure the server

const express = require('express'); // import express package and store in a variable called express
// make an instance of an Express Server
const app = express();

// app.verb(path, callback)
app.get("/", (request, response) => {

    response.json({
        message: "Hello world! This project is nice and organized! Tada!!"
    });
});

app.post("/", (request, response) => {

    response.json({
        message: "Recevied a POST request"
    });
});

// export the app
module.exports = {
    app: app
}