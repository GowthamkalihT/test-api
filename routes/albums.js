const router = require("express").Router();

const albums = require("../data/albums");

router.get("/", (req, res) => {
  res.json(albums);
});

router.get("/:id", (req, res) => {
  const album = albums.find((albumData) => albumData.id == req.params.id);
  if (album) {
    return res.json(album);
  }
  res.json({ msg: "sorry no user found" });
});

module.exports = router;
