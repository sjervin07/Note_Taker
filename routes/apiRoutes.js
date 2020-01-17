//Sets up database json
var notes = require("../db/db");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });


    app.post("/api/notes", function(req, res) {
          
      });

    app.delete("/api/notes", function(req, res) {

    });
}




//assign something to hold text...like text.title, notes.title