const router = require("express").Router();

const posts = require("../data/posts");

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const post = posts.find((postData) => postData.id == req.params.id);
  if (post) {
    return res.json(post);
  }
  res.json({ msg: "sorry no user found" });
});

module.exports = router;
