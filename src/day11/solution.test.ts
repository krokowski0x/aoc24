
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1 } from "./solution";

describe("Day 11", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);

    test("Part 1", () => {
      expect(part1(input[0].split(" ").map(Number), 25)).toBe(55312);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir);

    test("Part 1", () => {
      expect(part1(input[0].split(" ").map(Number), 25)).toBe(183435);
    });
    test("Part 2", () => {
      expect(part1(input[0].split(" ").map(Number), 75)).toBe(0);
    });
  });
});
