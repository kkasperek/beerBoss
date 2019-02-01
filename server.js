const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes-----------------------------------------
app.use(routes);


// Connect to the Mongo DB
const mongoDB = "mongodb://admin:adminbeer1@ds155424.mlab.com:55424/heroku_900680fz" ;
//process.env.MONGODB_URI mongoose.connect(process.env.mongodbURI || "mongodb://localhost/beerboss");
mongoose.connect(mongoDB, () => {
  console.log('connected to mongodb');
})
// .then(function (testBeer) {
//       console.log(testBeer);
//     })
//     .catch(function (err) {
//       console.log(err.message);
//     });



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
