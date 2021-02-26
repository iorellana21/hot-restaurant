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

//route that send user to the main page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

//route that send user to the page to add a reservation
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reservationform.html"));
});


// routes for localhost
app.get("/", function (req, res) {
    console.log("home");
    res.send("welcome home");
});

app.get("/api/reservations", function (req, res) {
    console.log("reservations");
    return res.json(reservation);
});

app.get("/api/waitlist", function (req, res) {
    console.log("waitlist");
    return res.json(waitlist);
});

// request coming in
app.post("/api/make", (req, res) => {
    var data = req.body;
    console.log(data);

    reservations.push(data);

    res.json(data);
});


// start server
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
