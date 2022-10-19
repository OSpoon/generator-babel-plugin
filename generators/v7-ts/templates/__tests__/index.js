import * as path from 'path';
import * as fs from 'fs';
import { diffChars } from 'diff';
import { transformFileSync } from '@babel/core';

describe('', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    const fixtureDir = path.join(fixturesDir, caseName);
    if (!fs.statSync(fixtureDir).isDirectory()) return;
    
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const actualPath = path.join(fixtureDir, 'actual.ts');
      const actual = transformFileSync(actualPath).code;
      const expected = fs.readFileSync(path.join(fixtureDir, 'expected.ts')).toString();
      const diff = diffChars(actual, expected);
      diff.length > 1 && console.log(diff);
      expect(diff.length).toBe(1);
    });
  });
});
