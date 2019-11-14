const PythonShell = require("python-shell").PythonShell;

let options = {
  mode: "text",
  pythonOptions: ["-u"]
};

module.exports = () => {
  let shell = new PythonShell("markov_generator.py", options);

  shell.on("message", message => {
    console.log(message);
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
