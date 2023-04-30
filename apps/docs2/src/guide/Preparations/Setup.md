# Setting Up a basic project


::: tip
To use DisciJS, you need to have Node.js installed on your computer (in your development environtment).

**NOTE:** You should install node.js even for a serverless project.

To see if you already have Node.js installed, you can run a command in your terminal.Just type `node -v` into your terminal and hit enter. If you see a version number that's `v16.9.0` or higher, you're all set! If not, keep reading to learn how to install Node.js.
:::

## Installing Node.js

### Windows
To install Node.js on Windows:
1. [Download the latest version](https://nodejs.org/en) from the Node.js website.
2. Open the downloaded file.
3. Follow the steps from the installer.

### macOS
To install Node.js on macOS, you can either:
1. [Download the latest version](https://nodejs.org/en) from the Node.js website, open the package installer, and follow the instructions.
2. Use a package manager like Homebrew with the command `brew install node`.

### Linux
To install Node.js on Linux, refer to [this page](https://nodejs.org/en/download/package-manager) to determine the appropriate installation method.


## Initiating a Project

::: tabs

@tab Serverless

See the serverless guide [here](../serverless/README.md)

@tab Traditional

See the Traditional guide [here](../Traditional/README.md)

:::

## Installing DisciJS

::: info
For both serverless and normal traditional hosting, installation of this package **SHOULD** be similar.
for serverless environments that requires bundling, the package supports bundling using softwares like (ex: [webpack](https://webpack.js.org/))
:::

> Currently this package is released to npm under tag @dev

To install the [DisciJS package](https://www.npmjs.com/package/disci/), run the relevant command for your package manager of choice:

::: code-tabs#cmd

@tab pnpm

```bash
 pnpm add disci@dev
```

@tab yarn

```bash
yarn add disci@dev
```

@tab:active npm

```bash
npm i disci@dev
```

:::
