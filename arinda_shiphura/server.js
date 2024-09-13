// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require('dotenv').config();




// Import models
// (Add model imports here if necessary)
const Form = require('./models/forms');




// Import routes
const formRoutes = require("./Routes/formRoutes"); // Import routes
const formsRoutes = require("./Routes/formsRoutes"); // Import routes



// Instantiate the app
const app = express();
const port = 45000;


//configuration
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });






// Set view engine to pug
app.set("view engine", "pug"); // Specify the view engine
app.set("views", path.join(__dirname, "views")); // Specify the views directory

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"))); // For serving static files




// Use routes
app.use("/", formRoutes); // Use imported routes
app.use("/", formsRoutes); // Use imported routes






// Catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).send("Error! Page does not exist");
});




// Bootstrapping the server
app.listen(port, () => console.log(`Listening on port ${port}`));
