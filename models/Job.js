var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    title: String,
    body: String
});

var Job = mongoose.model("Job", JobSchema);

module.exports = Job;