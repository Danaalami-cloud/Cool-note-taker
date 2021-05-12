const dbNotes = require("../db/dbNotes");
const router = require("express").Router();

router.get("/api/notes", (req, res) =>
  dbNotes.getAllNotes().then((notes) => {
    res.json(notes);
  })
);
router.post("/api/notes", (req, res) => 
  dbNotes.addNewNote(req.body).then((note) => {
      res.json(note);
  })
);

router.delete("/api/notes/:id", (req, res) => {
  dbNotes.deleteNote(req.params.id).then(() => res.json({Delete: "Successful"}))
});

module.exports = router;
