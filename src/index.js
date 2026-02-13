const {app} = require("./server.js");

// Grab the port value from the environment
const PORT = process.env.PORT || 3000; // IF process.env.POR does not exist use 3000 - > short circuit logic symbol || , the left side is preffered, but if it is not there, use right side

// // set up and configure the server
// const express = require('express') // import express package and store in a variable called express
// const app = express() // create an instance of express and store in a variable called app
// const port = 3000 // set the server port number to 3000

// // configure and mount any routes/controllers on to the server
// //get.verb(path, callback); 
// app.get('/', (req, res) => { // get request on the root route of the server
//     //res.send('Hello World!') // Sends a string
//     // res.send({message: 'Hello World!'}) // send a string that looks like JSON
//     res.json({message: 'Hello World!'}) // Garanteed to send JSON as the response body
// })

// // ^^^ this give us html file, and our APIs should give us Json file
// // to change this is to change how and what we send back "res.send('Hello World!')", because it sends back a string, we can change it to send back a json file instead, // by using "res.json({message: 'Hello World!'})" instead of "res.send('Hello World!')", this will send back a json file with a message property that has the value of 'Hello World!' instead of sending back a string.

// index.js should just have the import of the "app" variable and enough code to run app.listen()
// this file specifically just starts the server!!!
// boot up / start the server to listen for web traffic
app.listen(PORT, () => {
    //callback to confirm that the servetr is now running ans active
    console.log(`Example app listening on port http://localhost:${PORT}`) 
})


