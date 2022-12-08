const router = require("express").Router();

const usersRoute = require("./users");

router.get("/", (req, res) => {
  res.send("from api route");
});

const todosRoute = require("./todos");
const postsRoute = require("./posts");
const commentsRoute = require("./comments");
const photosRoute = require("./photos");
const albumsRoute = require("./albums");

router.use("/users", usersRoute);
router.use("/todos", todosRoute);
router.use("/posts", postsRoute);
router.use("/comments", commentsRoute);
router.use("/photos", photosRoute);
router.use("/albums", albumsRoute);

module.exports = router;
