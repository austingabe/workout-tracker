// Dependencies
const express = require("express");
const mongoose = require("mongoose");
// Sets dynamic port
const PORT = process.env.PORT || 3030;
// Sets up express app
const app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up static files
app.use(express.static("public"));

// Connects to MongoDB database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));
// Starts the server to listen to client requests
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});