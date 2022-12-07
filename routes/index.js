const router = require("express").Router();

const usersRoute = require("./users");
const todosRoute = require("./todos");
const postsRoute = require("./posts");
const commentsRoute = require("./comments");

router.use("/users", usersRoute);
router.use("/todos", todosRoute);
router.use("/posts", postsRoute);
router.use("/comments", commentsRoute);

module.exports = router;
