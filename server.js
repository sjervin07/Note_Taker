//Create var to require express package 

var express = require("express");

//Create express server
var app = express();

//Setting up Port
var PORT = process.env.PORT || 8080;

//Creating express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

//Linking html and api routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//Listener
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
}); 