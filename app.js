const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(3000, function () {});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/works", function (req, res) {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/photos", function (req, res) {
  res.sendFile(__dirname + "/views/photos.html");
});