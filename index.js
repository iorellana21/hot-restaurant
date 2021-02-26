// variable for Express module
var express = require('express');
var path = require("path");

// creating a server
var app = express();
// create PORT
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create an array for reservations
var reservation = [
    { name: "ivan" }
];

// create an array for waitlist
var waitlist = [
    { name: "justin" }
];


// routes for localhost
app.get("/", function (req, res) {
    console.log("home");
    res.send("welcome home");
});

app.get("/reservations", function (req, res) {
    console.log("reservations");
    return res.json(reservation);
});

app.get("/waitlist", function (req, res) {
    console.log("waitlist");
    return res.json(waitlist);
});

// request coming in
app.post("/api/make", (req, res) => {
    var data = req.body;
    console.log(data);
});


// start server
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
