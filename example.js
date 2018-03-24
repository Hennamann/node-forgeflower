const forgeflower=require("forgeflower");
const path = require('path');

const inputJar=path.join(__dirname,"forgeflower.jar");
const outputDir=path.join(__dirname,"output");

forgeflower(inputJar,outputDir)
  .then((decompiledDir) => console.log("Decompiled "+inputJar+" at "+decompiledDir))
  .catch(err => console.log(err.stack));