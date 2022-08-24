const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { createNote } = require("../../lib/notes");



router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  const newNote = createNote(req.body, notes);
  res.json(newNote);
});

module.exports = router;