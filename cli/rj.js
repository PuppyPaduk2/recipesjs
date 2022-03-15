#!/usr/bin/env node

const { program } = require("commander");
const { resolve } = require("path");

const { version } = require("../package.json");
const { parsePackage } = require("../utils/parse-package");
const { printTerminal } = require("../utils/print-terminal");

program.command("parse").action(async () => {
  const packageFile = resolve(process.cwd(), "./package.json");
  const { installDeps, installDevDeps } = await parsePackage(packageFile);

  printTerminal(
    [
      installDeps && {
        title: "Dependencies:",
        describe: installDeps,
      },
      installDevDeps && {
        before: "",
        title: "Dev dependencies:",
        describe: installDevDeps,
      },
    ].filter(Boolean)
  );
});

program.version(version).parse(process.argv);
