const PythonShell = require("python-shell").PythonShell;
const fs = require('fs');

let options = {
  mode: "text",
  pythonOptions: ["-u"],
  encoding: "utf-8"
};

// TODO: Encode message before it's written
module.exports = () => {
  let shell = new PythonShell("markov_generator.py", options);

  shell.on("message", message => {
    fs.writeFile('out.txt', message, (err) => {
      if (err) throw err
    })
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
