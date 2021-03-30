const { deliver } = require("./scripts.js");

const args = process.argv;

if (!args[2]) throw new Error("No instructons provided!");

let input = args[2];

console.log(input);
console.log(deliver(input));
