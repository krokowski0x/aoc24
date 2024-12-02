
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 2", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input)).toBe(2);
    });
    test("Part 2", () => {
      expect(part2(input)).toBe(4);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input)).toBe(218);
    });
    test("Part 2", () => {
      expect(part2(input)).toBe(290);
    });
  });
});