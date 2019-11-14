const fs = require('fs');
const connector = require("./js/connector");

connector()

let text = fs.readFileSync('generated.txt', 'utf-8', (err, data) => {
    if (err) throw err
    return data.toString()
})

console.log(text);