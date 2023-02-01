require("isomorphic-fetch");
const fs = require("fs");
const path = require("path");

const pathToAssets = path.resolve(__dirname, "./assets");
!fs.existsSync(pathToAssets) && fs.mkdirSync(pathToAssets);

function fetchAsset(source, headers, dist) {
  fetch(source, headers)
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.text();
    })
    .then(function (stories) {
      fs.writeFile(pathToAssets + "/" + dist, stories, function (err) {
        if (err) return console.log(err);
        console.log(`file copied to ${dist}`);
      });
    });
}

module.exports = fetchAsset;
