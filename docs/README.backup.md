# Generator

This package was created to 🏎️💨 **SPEED** up the creation of any `boilerplate` code / templates. This is a full rewrite of the Yeoman Generator I created nearly two years ago. It still works wonderfully actually, but as with all things there is room for improvement.

**Goals:**

- [x] Move off of Yeoman as a dependency
- [x] Fully written in ES6 and TypeScript
- [x] Solid test coverage via Jest and TS
- [ ] Make it even more customizable for the end user
  - [ ] ability to create custom workflows and validation

**Resources:**

- [Node Generator 📐](https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309)
- [Inquirer❔❓❔](https://www.npmjs.com/package/inquirer)
- [Yeoman Generator 👋](https://www.npmjs.com/package/generator-react-up)

**Todo:**

- [ ] Document the naming pattern for re-naming a file
- [ ] Document custom values in the `.generator.config` file
- [ ] Experiment with a custom callback / creation hook
- [ ] Encapsulate into a single Class
- [ ] Swap out Sync for Async methods
- [ ] More graceful error handling and reporting
  - Fine with not overriding, maybe a prompt though

## Installation & Setup

The setup process is pretty straight forward. Essentially we create a file `.generator.config` the first time the Generator is run. On subsequent runs, we bubble up from the current directory checking for a configuration file. If we don't find one, we'll prompt you to create one. Using this approach we can have multiple configurations co-exist. This also makes it incredibly easy to run the generator from anywhere we'd like to.

```sh
# This can also be installed on a per-project basis
npm i @visormatt/generator -g

# re-open the shell (same node version)
generate
```

## General Usage

Onto the good stuff... Assuming you've chosen the default template path (defaults to this 📦) we can now use one of the templates provided.

```sh
# 1. -> Kick off the script
generate

# 2. -> select `react-tsx-component`
# 3. -> Give it a name `ExampleComponent`
```

## Local Development & Testing

I'd love to see this tool become even more powerful so here's how to get hacking.

```sh
# Clone or fork the repo
git clone git@github.com:visormatt/tooling.git

# Basic installation
npm i

# Compile and watch for changes
npm run build:dev

# From the project folder
npm start
```
