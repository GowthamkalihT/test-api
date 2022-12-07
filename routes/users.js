const router = require("express").Router();

const users = require("../data/users");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((userData) => userData.id === req.params.id);
  if (user) {
    return res.json(user);
  }
  res.json({ msg: "sorry no user found" });
});

module.exports = router;
