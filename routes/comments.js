const router = require("express").Router();

const comments = require("../data/comments");

router.get("/", (req, res) => {
  res.json(comments);
});

router.get("/:id", (req, res) => {
  const comment = comments.find((commentData) => commentData.id == req.params.id);
  if (comment) {
    return res.json(comment);
  }
  res.json({ msg: "sorry no user found" });
});

module.exports = router;
