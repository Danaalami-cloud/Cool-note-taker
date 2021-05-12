const dbNotes = require("../db/dbNotes");
const router = require("express").Router();

router.get("/api/notes", (req, res) =>
  dbNotes.getAllNotes().then((notes) => {
    res.json(notes);
  })
);
router.post("/api/notes", (req, res) => console.log("post notes called"));

router.delete("/api/notes/:id", (req, res) => {
  console.log("delete notes called");
});

module.exports = router;
