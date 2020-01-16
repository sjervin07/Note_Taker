//Create var for express npm 

var express = require("express");

//Create express server
var app = express();

//Setting up Port
var PORT = process.env.PORT || 8080;

//Creating express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
}); 