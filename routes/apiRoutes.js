//Sets up database json
// var notes = require("../db/db");

var fs = require("fs")
var path = require("path")
let notesArray = getdatabase();

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(getdatabase());
        
    });

    app.post("/api/notes", function(req, res) {

        const newNote = req.body;
        newNote.id = Math.floor(Math.random() * 10000);
        notesArray.push(newNote)
        //req.body = addedNote;
        //notesArray.push(req.body);
        //notesArray.push({ title: "example note", text: "random text" });
        savedatabase(notesArray);

      });

    app.delete("/api/notes/:id", function(req, res) {

        //var database = getdatabase();

        // Empty out the arrays of data
        notesArray = notesArray.filter (note => note.id != req.params.id)  

        res.json(notesArray);
        savedatabase(notesArray);
    });

}

//Using getdatbase and savedatabase to save and rewrite notes 

function getdatabase() {
    const json = fs.readFileSync(path.join(__dirname, "../db/db.json"));
    return JSON.parse(json);
  }
  
  function savedatabase(newData) {
    return fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(newData))
  }














  // /* /* this returns a copy of database that can be modified */
// /* loads the .json file and returns a copied array[] */
//   /* this will write over the .json file with whatever you pass to this function */
//   to use this all you need to do is get rid of that require and do
//   /* example: adding note to database */
//   // 1) make a copy of the database (from .json)
//   const notesArray = getDatabase();
//   // 2) modify our copy of the .json array
//   notesArray.push({ title: "example note", text: "here is some text :D" });
//   // 3) write the modified copy back to the .json file (this will replace it)
//   saveDatabase(notesArray);
//   /* and done!! */
//  */