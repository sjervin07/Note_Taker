//Sets up database json
// var notes = require("../db/db");

var fs = require("fs")
var path = require("path")

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(getdatabase());
        
    });


    app.post("/api/notes", function(req, res) {
          
        notes.push(req.body);
        console.log(notes)
      });

    app.delete("/api/notes/:id", function(req, res) {

        var database = getdatabase();

        // Empty out the arrays of data
        database = database.filter (note => note.id != req.params.id)  

        //
        
        res.json(database);
        savedatbase(database);
    });

          
}

//Using getdatbase and savedatabase to save and rewrite notes 
function getdatabase() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
}

function savedatbase(data) {
    return fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
}
