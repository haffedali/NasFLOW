const mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/NASFLOW"
);

const jobSeed = [
    {
        title: "Pick nose",
        body: "pick it good"
    },
    {
        title: "Suck a toe",
        body: "mmmmmm"
    },
    {
        title: 'sexybooty',
        body: 'isallineed'
    }
];

db.Job
    .remove({})
    .then(() => db.Job.collection.insertMany(jobSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })