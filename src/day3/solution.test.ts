
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 3", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input[0])).toBe(161);
    });
    test("Part 2", () => {
      expect(part2(input[1])).toBe(48);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input[0])).toBe(191183308);
    });
    test("Part 2", () => {
      expect(part2(input[1])).toBe(92082041);
    });
  });
});
