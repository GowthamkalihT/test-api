const router = require("express").Router();

const todos = require("../data/todos");

router.get("/", (req, res) => {
  res.json(todos);
});

router.get("/:id", (req, res) => {
  const todo = todos.find((todoData) => todoData.id == req.params.id);
  if (todo) {
    return res.json(todo);
  }
  res.send("sorry user not found");
});

module.exports = router;
