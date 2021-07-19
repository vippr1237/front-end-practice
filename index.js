const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "main-page.html"));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port 3000");
});
