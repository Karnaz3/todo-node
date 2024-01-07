const express = require("express");
const app = express();

global.TODO_DB = require("./database/models")
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000")
  console.log("http://localhost:3000")
});