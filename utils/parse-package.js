const { readJson } = require("./read-json");

async function parsePackage(path) {
  const json = await readJson(path);

  return {
    installDeps: buildDeps(json.dependencies || {}),
    installDevDeps: buildDeps(json.devDependencies || {}),
  };
}

function buildDeps(deps) {
  const entries = Object.entries(deps);
  let instruction = "";

  for (const index in entries) {
    const [key, value] = entries[index];

    instruction += `  ${key}@${value}`;

    if (+index !== entries.length - 1) instruction += " \\\n";
  }

  return instruction;
}

module.exports = { parsePackage };
