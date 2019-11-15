const express = require("express");

const app = express();

app.listen(3000, console.log("running"));

app.get("/tweet", generateTweet);

function generateTweet(req, res) {
  let spawn = require("child_process").spawn;

  let process = spawn("python", ["./python/markov/markov_generator.py"]);

  process.stdout.on("data", function(data) {
    res.send(data.toString());
  });
}
