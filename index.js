const simpleGit = require("simple-git");
const { exec } = require("child_process");
const fs = require("fs");

// Inputs
const GITHUB_REPO = "https://github.com/KubeKode/react-todo-list-app";
const composeFilePathGiven = "";

const repoDirName = GITHUB_REPO.split("/")[4];
const composeFilePath = composeFilePathGiven
  ? `${repoDirName}/${composeFilePathGiven}/docker-compose.yml`
  : `${repoDirName}/docker-compose.yml`;

// For cloning the repo
const cloneRepo = async () => {
  try {
    const git = simpleGit();
    await git.clone(GITHUB_REPO);
    return true;
  } catch (e) {
    return false;
  }
};

// Now repo is cloned
const pullRepo = async () => {
  try {
    const git = simpleGit(repoDirName);
    await git.pull();
    return true;
  } catch (e) {
    console.error(`Error pulling repository: ${e}`);
    return false;
  }
};
const checkChanges = async () => {
  const git = simpleGit(repoDirName);
  const diffSummary = await git.diffSummary(["HEAD~"]);
  console.log(diffSummary)
  return diffSummary.changed > 0;
};
const main = async () => {
  const dir = fs.readdirSync(".");
  if (dir.includes(repoDirName)) {
    const repoPulled = await pullRepo();
    if (repoPulled) {
      const changes = await checkChanges();
      if (changes) {
        console.log("changes detected");
        runCompose();
      }
    }
  }
  const clone = await cloneRepo();
  if (clone) {
    console.log("Repo cloned");
  }
};
main();

const runCompose = () => {
  exec(
    `docker-compose -f ${composeFilePath} up --build -d`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running Docker Compose: ${error}`);
        return;
      }
      console.log("Application is UP");
      console.log(stdout);
    }
  );
};
