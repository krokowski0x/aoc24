
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 7", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input.map((line) => line.split(" ")))).toBe(3749);
    });
    test("Part 2", () => {
      expect(part2(input.map((line) => line.split(" ")))).toBe(11387);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input.map((line) => line.split(" ")))).toBe(267566105056);
    });
    test("Part 2", () => {
      expect(part2(input.map((line) => line.split(" ")))).toBe(116094961956019);
    });
  });
});
