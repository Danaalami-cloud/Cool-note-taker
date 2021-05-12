
const dbNotes = require("../db/dbNotes");


module.exports = (app) => {
  app.get("/api/notes", (req, res) => console.log("Get notes called"));
  app.post("/api/notes", (req, res) => console.log("post notes called"));

  app.delete("/api/notes/:id", (req, res) => {
    console.log("delete notes called");
  });
};
