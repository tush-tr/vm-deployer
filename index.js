const cron = require("node-cron")
const fs = require("fs");

// Modules
const runCompose = require("./compose")
const {cloneRepo,pullRepo,checkChanges} = require("./git")
// Inputs
const GITHUB_REPO = "https://github.com/KubeKode/react-todo-list-app";
const composeFilePathGiven = "";

const repoDirName = GITHUB_REPO.split("/")[4];
const composeFilePath = composeFilePathGiven
  ? `${repoDirName}/${composeFilePathGiven}/docker-compose.yml`
  : `${repoDirName}/docker-compose.yml`;


const main = async () => {
  const dir = fs.readdirSync(".");
  if (dir.includes(repoDirName)) {
    const repoPulled = await pullRepo(repoDirName);
    if (repoPulled) {
      const changes = await checkChanges(repoDirName);
      if (changes) {
        console.log("changes detected");
        runCompose(composeFilePath);
      }
    }
  }
  const clone = await cloneRepo(GITHUB_REPO);
  if (clone) {
    console.log("Repo cloned");
  }
};
cron.schedule("*/3 * * * *",()=>{
main()
})

