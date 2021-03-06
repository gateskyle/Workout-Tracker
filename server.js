// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WorkoutDB";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// Creating Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});