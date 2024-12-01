import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 1", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input)).toBe(11);
    });
    test("Part 2", () => {
      expect(part2(input)).toBe(31);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input)).toBe(2742123);
    });
    test("Part 2", () => {
      expect(part2(input)).toBe(21328497);
    });
  });
});
