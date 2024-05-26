<div align="center">
  <br />
  <p>
    <a href="https://resilientdb.com"><img src="https://i.imgur.com/s4089K7.png" width="300" alt="resvault" /></a>
  </p>
  <br />

  [![CircleCI](https://dl.circleci.com/status-badge/img/circleci/BFRoPNLWzXBpf5RZo1KKh7/RZ7Ks3aiKAZwQ8ofm6fer/tree/circleci-project-setup.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/BFRoPNLWzXBpf5RZo1KKh7/RZ7Ks3aiKAZwQ8ofm6fer/tree/circleci-project-setup)
  ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-resilientdb-site)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/apache/incubator-resilientdb-site)
  ![GitHub License](https://img.shields.io/github/license/apache/incubator-resilientdb-site)
  ![GitHub top language](https://img.shields.io/github/languages/top/apache/incubator-resilientdb-site)
</div>

# About
This repository contains the official source code for the Apache ResilientDB (Incubating) website. It is a Next.js-based project configured with Tailwind CSS for styling and uses a variety of tools and libraries to enhance the frontend experience.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 18 or later)
- npm (version 9 or later)

You can verify the installations using:
```bash
node --version
npm --version
```

## Setting Up the Development Environment

To get the development environment running, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/apache/incubator-resilientdb-site.git
    cd incubator-resilientdb-site
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project

You can run the project in development or production mode as follows:

- **Development mode**:
  ```bash
  npm run dev
  ```
  This starts the development server on [http://localhost:3000](http://localhost:3000). The server will reload if you make edits.

- **Production mode**:
  ```bash
  npm run build
  npm run start
  ```
  This builds the application for production usage and starts a Node.js server to serve the built site.

- **Linting**:
  ```bash
  npm run lint
  ```
  Run the linting utility to check for issues in the codebase.

## Continuous Integration and Deployment

Pushing to the `main` branch triggers a CircleCI build. CircleCI is configured to build the static site and commit the generated files to the `asf-site` branch. The Apache Software Foundation infrastructure automatically deploys the contents of the `asf-site` branch, ensuring that the latest changes are always live.

## License

This project is licensed under the Apache License 2.0 - see the [https://github.com/apache/incubator-resilientdb-site/blob/master/LICENSE](LICENSE) file for details.
