const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require('./database');

// API
// const users = require('/api/users');
// app.use('/api/users', users);
// const entries = require('/api/entry')
// app.use('/api/entry', entries)

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// const mongoose = require('mongoose');
const connection = "mmongodb+srv://Madeline:Cowell@cluster0.bsnva.mongodb.net/celestial-navigator?retryWrites=true&w=majorityongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/celestial-navigator',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
