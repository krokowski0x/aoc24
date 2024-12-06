
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 6", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input.map((line) => line.split("")))).toBe(41);
    });
    test("Part 2", () => {
      expect(part2(input.map((line) => line.split("")))).toBe(6);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input.map((line) => line.split("")))).toBe(5153);
    });
    test("Part 2", () => {
      expect(part2(input.map((line) => line.split("")))).toBe(0);
    });
  });
});
