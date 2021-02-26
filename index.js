// variable for Express module
const express = require('express');

// creating a server
const app = express();

// create PORT
const PORT = 8080;

// routes for localhost
app.get("/", function (req, res) {
    res.send("welcome home");
});

// start server
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});

