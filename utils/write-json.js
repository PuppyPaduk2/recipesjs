const { writeFile } = require("fs/promises");

async function writeJson(path, data) {
  try {
    await writeFile(path, JSON.stringify(data, null, 2));
    return true;
  } catch {
    return false;
  }
}

module.exports = { writeJson };
