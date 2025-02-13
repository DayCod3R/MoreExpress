var express = require("express");
var app = express();
//To route to other directories("?")
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("/views/home");
});
app.get("fallinlovewith/:thing", function (req, res) {
  var thing = req.params.thing;
  res.send("love", { thingVar: thing });
});

app.get("/posts", function (req, res) {
  var posts = [
    { title: "Post 1", author: "Susy" },
    { title: "My adorable pet bunny", author: "Charlie" },
    { title: "Can you believe this pomsky?", author: "Colt" },
  ];
  res.render("/views/posts", { posts: posts });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server is listening!");
});
