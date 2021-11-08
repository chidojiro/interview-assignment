require("isomorphic-fetch");
const fs = require("fs");
const path = require("path");
const pathToSvg = path.resolve(__dirname, "./");

fetch("https://uk-static-dev.dta.randstadbluex.com/themes/custom/bluex/dist/assets/image/icons.svg")
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.text();
  })
  .then(function (stories) {
    fs.writeFile(pathToSvg + "/auto-generated-icons.svg", stories, function (err) {
      if (err) return console.log(err);
      console.log("svgs copied to file");
    });
  });
