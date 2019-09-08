# 🤖 Generator

[![NPM Version][image-npm-version]][link-npm]
[![Dependabot][image-dependabot]][link-dependabot]
[![CodeCov][image-codecov]][link-codecov]

[![Dependencies][image-dependencies]][link-dependencies]
[![DevDependencies][image-dev-dependencies]][link-dev-dependencies]
[![Monthly Downloads][image-npm-monthly]][link-npm]
[![Total Downloads][image-npm-total]][link-npm]
<!-- [![Circle CI][image-circle-ci]][link-circle-ci] -->

## Overview

This package was created to 🏎️💨 **SPEED** up the creation of `boilerplate` code & templates. It's easily configured and can be utilized across multiple projects. It can also be configured to share `templates` or each project can supply their own. Even better you can create your own templates using the [EJS][link-ejs] syntax.

> Checkout the [docs](./docs/README.md) folder for the project details.

## Installation

**Super simple** just install it like any other NPM package. The only caveat is the `--global` or `-g` flag which will install this `globally` for the version of NodeJS you're running. This is done to make use of the tool as a CLI script `generate` and this allows you to generate templates at any level within your project.

```bash
# Global installation
npm i @visormatt/generator -g

# Run from the project root
generate:setup

# And now from anywhere
generate
```

<!-- Links: -->

[link-circle-ci]: https://circleci.com/gh/visormatt/generator/tree/master "Circle CI"
[link-codecov]: https://codecov.io/gh/visormatt/generator "Codecov"
[link-dependabot]: https://dependabot.com/ "Dependabot"
[link-dependencies]: https://david-dm.org/visormatt/generator "Dependencies"
[link-dev-dependencies]: https://david-dm.org/visormatt/generator?type=dev "DevDependencies"
[link-ejs]: https://ejs.co/ "ejs"
[link-inquirer]: https://github.com/SBoudrias/Inquirer.js "Inquirer"
[link-nodejs]: https://nodejs.org/en/ "nodejs"
[link-npm]: https://www.npmjs.com/package/@visormatt/generator "NPM Package"
[link-react-up]: https://github.com/visormatt/generator-react-up "React Up"
[link-typescript]: https://www.typescriptlang.org/ "typescript"

<!-- Images: -->

[image-circle-ci]: https://circleci.com/gh/visormatt/generator/tree/master.svg?style=svg "Circle CI"
[image-codecov]: https://codecov.io/gh/visormatt/generator/branch/master/graph/badge.svg "Codecov"
[image-dependabot]: https://img.shields.io/badge/🤖dependabot-enabled-blue "Dependabot"
[image-dependencies]: https://david-dm.org/visormatt/generator/status.svg "Dependencies"
[image-dev-dependencies]: https://david-dm.org/visormatt/generator/dev-status.svg "DevDependencies"
[image-npm-monthly]: https://img.shields.io/npm/dm/@visormatt/generator.svg "Monthly Downloads"
[image-npm-total]: https://img.shields.io/npm/dt/@visormatt/generator.svg "Total Downloads"
[image-npm-version]: https://img.shields.io/npm/v/@visormatt/generator.svg "NPM Version"
