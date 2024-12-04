
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 4", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input.map((row) => row.split("")))).toBe(18);
    });
    test("Part 2", () => {
      expect(part2(input.map((row) => row.split("")))).toBe(9);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input.map((row) => row.split("")))).toBe(2591);
    });
    test("Part 2", () => {
      expect(part2(input.map((row) => row.split("")))).toBe(1880);
    });
  });
});
