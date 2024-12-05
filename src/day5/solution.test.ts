
import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 5", () => {
  describe("Example", async () => {
    const input = await readLines(import.meta.dir, true);
  const emptyLine = input.findIndex((line) => line === "");
  const rules: Record<string, string[]> = {};
  input.slice(0, emptyLine).forEach((rule) => {
    const [first, second] = rule.split("|");
    if (!(first in rules)) {
      rules[first] = [second];
    } else {
      rules[first].push(second);
    }
  });
  const updates = input.slice(emptyLine + 1).map((line) => line.split(","));

    test("Part 1", () => {
      expect(part1(rules, updates)).toBe(143);
    });
    test("Part 2", () => {
      expect(part2(rules, updates)).toBe(123);
    });
  });

  describe("Solution", async () => {
    const input = await readLines(import.meta.dir );
  const emptyLine = input.findIndex((line) => line === "");
  const rules: Record<string, string[]> = {};
  input.slice(0, emptyLine).forEach((rule) => {
    const [first, second] = rule.split("|");
    if (!(first in rules)) {
      rules[first] = [second];
    } else {
      rules[first].push(second);
    }
  });
  const updates = input.slice(emptyLine + 1).map((line) => line.split(","));

    test("Part 1", () => {
      expect(part1(rules, updates)).toBe(4637);
    });
    test("Part 2", () => {
      expect(part2(rules, updates)).toBe(6370);
    });
  });
});
