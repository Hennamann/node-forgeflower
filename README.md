# node-forgeflower

A simple wrapper for the [ForgeFlower](https://github.com/MinecraftForge/ForgeFlower) java decompiler, made with Node.js

It's largely based on the existing source code for [node-fernflower](https://github.com/rom1504/node-fernflower) but altered to use ForgeFlower instead of Fernflower.

## Installation

### CLI Installation

A CLI interface for ForgeFlower can be installed with 

```bash
npm install -g fernflower
```

### Programmatic Installation

To install it for use programmatically in a node.js project the following command will install it in your npm project:

```bash
npm install fernflower
```

## Usage

### CLI Usage

The CLI interface can be used like this: 

```bash
forgeflower <jarFile> <outputDir> [<verbose>]
```

### Programmatic Usage

Here's an example for using the package programmatically:

```js
const forgeflower=require("forgeflower");
const path = require('path');


const inputJar=path.join(__dirname,"forgeflower.jar");
const outputDir=path.join(__dirname,"output");

forgeflower(inputJar,outputDir)
  .then((decompiledDir) => console.log("Decompiled "+inputJar+" at "+decompiledDir))
  .catch(err => console.log(err.stack));
```

See the `example.js` file located in this repository for a full example.

## License
This project is licensed with the Apache 2.0 license, see the [LICENSE](LICENSE.txt) file.