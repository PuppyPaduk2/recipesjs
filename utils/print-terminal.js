const { gray, magenta } = require("colors");

function printTerminal(blocks = []) {
  for (const index in blocks) {
    const { before, title, describe } = blocks[index];

    if (isString(before)) console.log(before);
    if (isString(title)) console.log(magenta.bold(title));
    if (isString(describe)) console.log(gray(describe));
  }
}

function isString(value) {
  return typeof value === "string";
}

module.exports = { printTerminal };
