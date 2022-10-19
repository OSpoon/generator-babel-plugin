import * as path from "path";
import * as fs from "fs";
import { diffChars } from "diff";
import { transformFileSync } from "@babel/core";
import _console from "console";

const _color = (input, style = 1, color = 92) => {
  return `\x1b[7;${color};${style};1m${input}\x1b[0m`;
};

const _print = (diff) => {
  _console.log(_color("PS：", 0, 100));
  _console.log(_color(" red for additions, yellow for deletions", 0, 100));
  _console.log(_color("------------start-------------", 0, 100));
  let parts = "";
  diff &&
    diff.forEach((part) => {
      parts += _color(
        part.value,
        part.removed ? 9 : 1,
        part.added ? 91 : part.removed ? 93 : 92
      );
    });
  _console.log(parts);
  _console.log(_color("-------------over-------------", 0, 100));
};

describe("", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  fs.readdirSync(fixturesDir).map((caseName) => {
    const fixtureDir = path.join(fixturesDir, caseName);
    if (!fs.statSync(fixtureDir).isDirectory()) return;

    it(`should ${caseName.split("-").join(" ")}`, () => {
      const actualPath = path.join(fixtureDir, "actual.ts");
      const actual = transformFileSync(actualPath).code;
      const expected = fs
        .readFileSync(path.join(fixtureDir, "expected.ts"))
        .toString();
      const diff = diffChars(actual, expected);
      diff.length > 1 && _print(diff);
      expect(diff.length).toBe(1);
    });
  });
});
