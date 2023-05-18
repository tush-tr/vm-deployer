const { exec } = require("child_process");
const runCompose = (composeFilePath) => {
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

module.exports = runCompose;