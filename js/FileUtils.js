const fs = require('fs');

module.exports.writeTweet = (filepath, tweet) => {
    fs.writeFileSync(filepath, tweet, (err) => {
        if (err) throw err
      })
}