const router = require("express").Router();
const { notes } = require("../../db/db.json");



router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = // CORRECT THIS
  const newNote = createNote(req.body, notes);
  res.json(newNote);
});
