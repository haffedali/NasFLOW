var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
// var axios = require("axios");
// var cheerio = require("cheerio");

// Require all models
var db = require('./models');

var PORT = 3002;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  else{
    app.use(express.static("client/public/user"));
  }

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/NASFLOW", { useNewUrlParser: true });








//ROUTES

// app.get('/',function (req,res){
//   db.Job.find({})
//     .then(function(dbJob){
//       res.json(dbJob)
//     })
//     .catch(function(err){
//       res.json(err);
//     })
// })

// app.post('/jobs',function(req,res){
//   db.Job.create(req.body)
//     .then(function(dbJob){
//       res.json(dbJob)
//     })
//     .catch(function(err){
//       res.json(err)
//     })
// })

app.listen(PORT, function() {
  console.log("server running on port " + PORT + "!");
});
