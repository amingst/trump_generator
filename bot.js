const connector = require("./connector");
const fs = require('fs');

connector()

let text = fs.readFileSync('out.txt', 'utf-8', (err, data) => {
    if (err) throw err
    return data.toString()
})

console.log(text);