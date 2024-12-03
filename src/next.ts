import { mkdir } from "node:fs/promises";

(async () => {
  const day = new Date().getDay() + 1;
  const dir = `src/day${day}/`;
  const solution = `
import { readLines } from "../utils";

const part1 = (input: string[]): number => {
  let result = 0;

  for (const line of input) {

  }

  return result;
};

const part2 = (input: string[]): number => {
  let result = 0;

  for (const line of input) {

  }

  return result;
};

(async () => {
  const input = await readLines(import.meta.dir, true);

  console.log("Part 1:", part1(input));

  // console.log("Part 2:", part2(input))
})();

export { part1, part2 }
`;

  const test = `
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day ${day}", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input)).toBe(0);
    });
    test("Part 2", () => {
      expect(part2(input)).toBe(0);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input)).toBe(0);
    });
    test("Part 2", () => {
      expect(part2(input)).toBe(0);
    });
  });
});
`;
  await mkdir(dir);
  await Bun.write(`${dir}/input.txt`, "");
  await Bun.write(`${dir}/example.txt`, "");
  await Bun.write(`${dir}/solution.ts`, solution);
  await Bun.write(`${dir}/solution.test.ts`, test);
})();
