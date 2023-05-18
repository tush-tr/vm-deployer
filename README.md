# VMDeploy

<img src="vmdeploy.png">

***A GitOps Continuous Delivery Tool for VMs.***


vmdeploy is a command-line tool for deploying Dockerized applications on virtual machines. It automates the process of monitoring code repositories and deploying updated versions of the application to target virtual machines. With vmdeploy, you can easily manage your deployments without relying on complex CI/CD pipelines or Kubernetes clusters.

## Features
- **Version Control Integration:** Integrate vmdeploy with your version control system (e.g., Git) to monitor changes in your code repositories. It can detect new commits or changes in code, triggering automatic deployments.
- **Automated Deployment:** vmdeploy periodically checks for changes in the repository and deploys the updated version of your Dockerized application to the target virtual machine.
- **Flexible Configuration:** Customize the deployment process by specifying the repository, Docker Compose file path, deployment interval, and other options according to your project's requirements.



## Installation
- To install vmdeploy, use the following command:

  ```
  npm install -g vmdeploy
  ```
  The -g option installs vmdeploy globally, making it accessible from anywhere in the command line.

## Usage
- To run vmdeploy, open your terminal and execute the following command:

  ```
  vmdeploy <GITHUB_REPO_URL>
  ```

## Behind the Scenes
```vmdeploy``` utilizes the following technologies and components:

- Node.js: vmdeploy is built with Node.js, allowing you to run it on various operating systems and environments.
- Git Integration: It uses the simple-git package to clone the repository, pull changes, and detect code modifications.
- Child Process: vmdeploy utilizes the child_process module to execute the Docker Compose command as a child process, enabling seamless deployment in the background.

## Contribution and Support
Contributions to vmdeploy are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit an issue on the GitHub repository.

<hr>