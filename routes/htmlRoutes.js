//Set route to require "path"
var path = require("path");

//Creates "get" requests for each html page so user can go to each site
module.exports = function(app) {
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Reroutes to index page if anything other than notes or index are inputed
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
