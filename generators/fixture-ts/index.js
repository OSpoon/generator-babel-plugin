'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Create a fixture'
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('actual.ts'),
      this.destinationPath('__tests__/fixtures/' + this.arguments[0] + '/actual.ts')
    );
    this.fs.copy(
      this.templatePath('expected.ts'),
      this.destinationPath('__tests__/fixtures/' + this.arguments[0] + '/expected.ts')
    );
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('__tests__/fixtures/' + this.arguments[0] + '/.babelrc')
    );
  }
}
