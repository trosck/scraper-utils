"use strict";

const FileHound = require("filehound");
const fs = require("fs");

const files = FileHound.create()
  .paths(__dirname + "/dist/mjs")
  .discard("node_modules")
  .ext("js")
  .find();

files.then((filePaths) => {
  filePaths.forEach((filepath) => {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (!data.match(/(import|export) .* from/g)) {
        return;
      }
      let newData = data.replace(
        /((import|export) .* from\s+['"])(.*)(?=['"])/g,
        "$1$3.js"
      );
      if (err) throw err;

      console.log(`writing to ${filepath}`);
      fs.writeFile(filepath, newData, function (err) {
        if (err) {
          throw err;
        }
        console.log("complete");
      });
    });
  });
});
