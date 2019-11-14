const PythonShell = require("python-shell").PythonShell;
const writeTweet = require('./FileUtils').writeTweet;

let options = {
  mode: "text",
  pythonOptions: ["-u"],
  encoding: "utf-8"
};

// TODO: Encode message before it's written
module.exports = () => {
  let shell = new PythonShell("markov_generator.py", options);

  shell.on("message", message => {
    writeTweet('generated.txt', message);
  });

  shell.on("error", err => {
    console.log(err);
  });

  shell.end(err => {
    if (err) {
      throw err;
    }
  });
};
