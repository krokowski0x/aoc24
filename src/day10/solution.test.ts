
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 10", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input.map((val) => val.split("").map(Number)))).toBe(36);
    });
    test("Part 2", () => {
      expect(part2(input.map((val) => val.split("").map(Number)))).toBe(81);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input.map((val) => val.split("").map(Number)))).toBe(698);
    });
    test("Part 2", () => {
      expect(part2(input.map((val) => val.split("").map(Number)))).toBe(1436);
    });
  });
});
