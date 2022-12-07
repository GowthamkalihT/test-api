const express = require("express");

const app = express();

const apiRoute = require("./routes");

app.use("/api", apiRoute);

app.get("/", (req, res) => {
  // res.json({ message: "its working" });
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/", (req, res) => {
  res.json({ message: "route not found" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("server is up and running");
});

module.exports = apiRoute;
