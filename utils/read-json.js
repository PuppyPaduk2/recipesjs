const { readFile } = require("fs/promises");

async function readJson(path) {
  try {
    const raw = await readFile(path);
    return JSON.parse(raw.toString());
  } catch {
    return {};
  }
}

module.exports = { readJson };
