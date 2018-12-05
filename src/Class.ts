// // Internal
// import chalk from 'chalk';

// interface GeneratorOptions {
//   debug?: boolean;
// }

// const defaultOpts = {
//   debug: true
// };

// /**
//  * @class Generator
//  * @description This class is used to encapsulate the information we need
//  * to do our magic along with any user created data
//  */
// class Generator {
//   private opts: GeneratorOptions;

//   public constructor(opts: GeneratorOptions = defaultOpts) {
//     this.opts = opts;

//     this._getTemplates();
//   }

//   // First we need to grab all of our templates
//   private _getTemplates = () => {
//     this._logger('Get templates', this.opts);
//   };

//   // Simple debugger
//   private _logger = (...args: any) => {
//     if (!this.opts.debug) return;

//     const prefix = chalk.redBright('DEBUG:');
//     console.log(prefix, ...args);
//   };
// }

// export { Generator };
