# ⚔️ Generator

[![Circle CI][image-circle-ci]][link-circle-ci]
[![CodeCov][image-codecov]][link-codecov]
[![Dependencies][image-dependencies]][link-dependencies]

This package was created to 🏎️💨 **SPEED** up the creation of any `boilerplate` code / templates. This is a full rewrite of the [Yeoman Generator][link-react-up] I created nearly two years ago. It still works wonderfully actually, but as with all things there is room for improvement.

**Project Goals**

- Improve user customization
- Customizable prompts and inputs
- Solid test coverage
- Updated packages

**Dependencies**

- **[NodeJS][link-nodejs]** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Typescript][link-typescript]**
  A typed superset of Javascript that compiles to plain Javascript.
- **[EJS][link-ejs]** Embedded JavaScript templating.
- **[Inquirer][link-inquirer]** A collection of common interactive command line user interfaces.

## Getting Started

Getting started is pretty easy, just clone, install and get generating. It comes with several default templates that you can use, modify or remove. Take a look at the [Docs Folder](./docs) for more documentation or use the quick start below.

**Quick Start**

```bash
# Have to clone (need to make it an NPM package)
git clone git@github.com:visormatt/generator.git

# Build it once
npm run build:dev

# Adds the `generate` CLI command (from package.json scripts/bin)
npm link

# Run the cli ~ select the template
generate
```

<!-- Links: -->

[link-circle-ci]: https://circleci.com/gh/visormatt/generator/tree/master 'Circle CI'
[link-codecov]: https://goo.gl/jD1QfD 'Codecov'
[link-dependencies]: https://david-dm.org/visormatt/generator 'Dependencies'
[link-ejs]: https://ejs.co/ 'ejs'
[link-inquirer]: https://github.com/SBoudrias/Inquirer.js 'Inquirer'
[link-nodejs]: https://nodejs.org/en/ 'nodejs'
[link-react-up]: https://github.com/visormatt/generator-react-up 'React Up'
[link-typescript]: https://www.typescriptlang.org/ 'typescript'

<!-- Images: -->

[image-circle-ci]: https://circleci.com/gh/visormatt/generator/tree/master.svg?style=svg 'Circle CI'
[image-codecov]: https://codecov.io/gh/visormatt/generator/branch/master/graph/badge.svg 'Codecov'
[image-dependencies]: https://david-dm.org/visormatt/generator.svg 'Dependencies'
