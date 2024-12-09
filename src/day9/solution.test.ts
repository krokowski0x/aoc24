
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 9", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input[0].split('').map(Number))).toBe(1928);
    });
    test("Part 2", () => {
      expect(part2(input[0].split('').map(Number))).toBe(2858);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input[0].split('').map(Number))).toBe(6378826667552);
    });
    test("Part 2", () => {
      expect(part2(input[0].split('').map(Number))).toBe(0);
    });
  });
});
