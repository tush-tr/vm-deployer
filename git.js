const simpleGit = require("simple-git");

// For cloning the repo
const cloneRepo = async (GITHUB_REPO) => {
  try {
    const git = simpleGit();
    await git.clone(GITHUB_REPO);
    return true;
  } catch (e) {
    return false;
  }
};

// Now repo is cloned
const pullRepo = async (repoDirName) => {
  try {
    const git = simpleGit(repoDirName);
    await git.pull();
    return true;
  } catch (e) {
    console.error(`Error pulling repository: ${e}`);
    return false;
  }
};
const checkChanges = async (repoDirName) => {
  const git = simpleGit(repoDirName);
  const diffSummary = await git.diffSummary(["HEAD~"]);
  console.log(diffSummary);
  return diffSummary.changed > 0;
};
module.exports = {cloneRepo,pullRepo,checkChanges}