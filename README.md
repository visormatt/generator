# 🤖 Generator

<!-- [![Circle CI][image-circle-ci]][link-circle-ci] -->
[![Dependencies][image-dependencies]][link-dependencies]
[![DevDependencies][image-dev-dependencies]][link-dev-dependencies]

[![Monthly Downloads][image-npm-monthly]][link-npm]
[![Total Downloads][image-npm-total]][link-npm]

[![NPM Version][image-npm-version]][link-npm]
[![CodeCov][image-codecov]][link-codecov]

This package was created to 🏎️💨 **SPEED** up the creation of any `boilerplate` code / templates. This is a full rewrite of the [Yeoman Generator][link-react-up] I created nearly two years ago. It still works wonderfully actually, but as with all things there is room for improvement.

**Project Goals:**

- Improve user customization
- Customizable prompts and inputs
- Solid test coverage
- Updated packages

**Dependencies:**

- **[NodeJS][link-nodejs]** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Typescript][link-typescript]**
  A typed superset of Javascript that compiles to plain Javascript.
- **[EJS][link-ejs]** Embedded JavaScript templating.
- **[Inquirer][link-inquirer]** A collection of common interactive command line user interfaces.

## Getting Started

Getting started is pretty easy, just clone, install and get generating. It comes with several default templates that you can use, modify or remove. Take a look at the [Docs Folder](./docs) for more documentation or use the quick start below.

**Quick Start:**

I need to wrap this up into an NPM package 📦 making it easier to use, but in the mean time we can clone and install it locally. The only 👉 caveat 👈 here is when running the commands below, your **Node versions must match** the projects Node version you want to use this generator.

```bash
# Have to clone (need to make it an NPM package)
git clone git@github.com:visormatt/generator.git

# Jump into the build
cd generator/

# Install the packages required to build
npm run build

# Adds the `generate` CLI command (from package.json ~ scripts/bin)
npm link
```

👍 Now the tool is installed. The first time you run `generate` from the CLI you be prompted to customize a few fields, these are made available to the templates as variables. All this does is create a `.generator.config` file at the `root` of your project. As you navigate to the children running `generate` will bubble up searching for this file, if one is not found we assume you are starting a new project. Use it many places, create your own templates and if you have a free minute help me add some features 😉

<!-- Links: -->

[link-circle-ci]: https://circleci.com/gh/visormatt/generator/tree/master "Circle CI"
[link-codecov]: https://codecov.io/gh/visormatt/generator "Codecov"
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
[image-dependencies]: https://david-dm.org/@visormatt/generator/status.svg "Dependencies"
[image-dev-dependencies]: https://david-dm.org/@visormatt/generator/dev-status.svg "DevDependencies"
[image-npm-monthly]: https://img.shields.io/npm/dm/@visormatt/generator.svg "Monthly Downloads"
[image-npm-total]: https://img.shields.io/npm/dt/@visormatt/generator.svg "Total Downloads"
[image-npm-version]: https://img.shields.io/npm/v/@visormatt/generator.svg "NPM Version"
