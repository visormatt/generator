# Generator

This package was created to 🏎️💨 **SPEED** up the creation of any `boilerplate` code / templates. This is a full rewrite of the Yeoman Generator I created nearly two years ago. It still works wonderfully actually, but as with all things there is room for improvement.

## Goals

- [x] Move off of Yeoman as a dependency
- [x] Fully written in ES6 and TypeScript
- [x] Solid test coverage via Jest and TS
- [ ] Make it even more customizable for the end user
  - [ ] ability to create custom workflows and validation

**Todo:**

- [ ] Document the naming pattern for re-naming a file
- [ ] Document custom values in the `.generator.config` file
- [ ] Experiment with a custom callback / creation hook
- [ ] Encapsulate into a single Class
- [ ] Swap out Sync for Async methods
- [ ] More graceful error handling and reporting
  - Fine with not overriding, maybe a prompt though

**Resources:**

- [Node Generator 📐](https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309)
- [Inquirer❔❓❔](https://www.npmjs.com/package/inquirer)
- [Yeoman Generator 👋](https://www.npmjs.com/package/generator-react-up)
