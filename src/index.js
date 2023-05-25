#!/usr/bin/env node
const cron = require("node-cron");
const fs = require("fs");

if(process.argv.length<3){
  throw new Error("Please Provide Github repo url as argument: vmdeploy [GITHUB_REPO_URL] [ComposeFilePath](optional)")
  process.exit(1)
}

// Modules
const runCompose = require("./compose");
const { cloneRepo, pullRepo, checkChanges } = require("./git");
// Inputs
const GITHUB_REPO = process.argv[2];
const composeFilePathGiven = process.argv[3] || "";

const repoDirName = GITHUB_REPO.split("/")[4];
const composeFilePath = composeFilePathGiven
  ? `${repoDirName}/${composeFilePathGiven}/docker-compose.yml`
  : `${repoDirName}/docker-compose.yml`;

const deployOnPull = async () => {
  const repoPulled = await pullRepo(repoDirName);
  if (repoPulled) {
    const changes = await checkChanges(repoDirName);
    if (changes) {
      runCompose(composeFilePath);
    }
  }
};
const deployOnClone = async () => {
  const clone = await cloneRepo(GITHUB_REPO);
  if (clone) {
    console.log("Repo cloned");
    runCompose(composeFilePath);
  }
};
const main = async () => {
  const dir = fs.readdirSync(".");
  if (dir.includes(repoDirName)) {
    await deployOnPull();
  } else {
    await deployOnClone();
  }
};
main();
cron.schedule("*/3 * * * *", () => {
  main();
});
