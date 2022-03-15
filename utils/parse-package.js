const { readJson } = require("./read-json");

async function parsePackage(path, { isDepVersion = false } = {}) {
  const json = await readJson(path);

  return {
    installDeps: buildDeps(json.dependencies || {}, { isDepVersion }),
    installDevDeps: buildDeps(json.devDependencies || {}, { isDepVersion }),
  };
}

function buildDeps(deps, { isDepVersion = false } = {}) {
  const entries = Object.entries(deps);
  let instruction = "";

  for (const index in entries) {
    const [key, value] = entries[index];

    if (isDepVersion) instruction += `  ${key}@${value}`;
    else instruction += `  ${key}`;

    if (+index !== entries.length - 1) instruction += " \\\n";
  }

  return instruction;
}

module.exports = { parsePackage };
