#!/usr/bin/env node

const forgeflower=require("forgeflower");
const path = require('path');

if(process.argv.length <4 || process.argv.length >5) {
  console.log("Usage : forgeflower <jarFile> <outputDir> [<verbose>]");
  process.exit(1);
}

const inputJar=process.argv[2];
const outputDir=process.argv[3];
const verbose=process.argv[4];

forgeflower(inputJar,outputDir,verbose)
  .then((decompiledDir) => console.log("Decompiled "+inputJar+" at "+decompiledDir))
  .catch(err => console.log(err.stack));
