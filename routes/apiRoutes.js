var fs = require("fs");
var path = require("path");
let notesArray = getdatabase();

module.exports = function(app) {
  //Retrieves data from notes api
  app.get("/api/notes", function(req, res) {
    res.json(getdatabase());
  });

  //Posts sends new notes to server
  app.post("/api/notes", function(req, res) {
    const newNote = req.body;
    newNote.id = Math.floor(Math.random() * 10000);
    notesArray.push(newNote);
    savedatabase(notesArray);
  });

  // Empty out the arrays of data
  app.delete("/api/notes/:id", function(req, res) {
    notesArray = notesArray.filter(note => note.id != req.params.id);
    res.json(notesArray);
    savedatabase(notesArray);
  });
};
//Using getdatbase and savedatabase to save and rewrite notes

function getdatabase() {
  const json = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  return JSON.parse(json);
}

function savedatabase(newData) {
  return fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(newData)
  );
}
