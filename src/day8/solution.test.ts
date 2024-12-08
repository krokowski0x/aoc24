
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 8", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input.map((line) => line.split('')))).toBe(14);
    });
    test("Part 2", () => {
      expect(part2(input.map((line) => line.split('')))).toBe(34);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input.map((line) => line.split('')))).toBe(252);
    });
    test("Part 2", () => {
      expect(part2(input.map((line) => line.split('')))).toBe(839);
    });
  });
});
