const router = require("express").Router();

const photos = require("../data/photos");

router.get("/", (req, res) => {
  res.json(photos);
});

router.get("/:id", (req, res) => {
    const photo = photos.find((userData) => userData.id == req.params.id);
    if (photo) {
      return res.json(photo);
    }
    res.json({ msg: "sorry no user found" });
  });

module.exports = router;
