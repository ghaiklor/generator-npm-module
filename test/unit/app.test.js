import path from 'path';
import { assert, test } from 'yeoman-generator';

describe('es5-npm-module', () => {
  before(done => {
    test
      .run(path.join(__dirname, '../../src/app'))
      .withOptions({skipInstall: true})
      .withPrompts({'module:license': 'MIT'})
      .on('end', done);
  });

  it('Should create root files', () => {
    assert.file([
      'lib/index.js',
      'test/unit/index.test.js',
      'test/bootstrap.test.js',
      'test/mocha.opts',
      'CHANGELOG.md',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.npmignore',
      '.travis.yml',
      'LICENSE',
      'package.json',
      'README.md'
    ]);
  });
});
