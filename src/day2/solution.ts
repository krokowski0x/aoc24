import { readLines } from "../utils";

const isReportSafe = (level: number[]): boolean => {
  let result = true;
  const direction = level[0] - level[level.length - 1] > 0 ? 1 : -1;

  for (let i = 0; i < level.length; i++) {
    const diff = level[i] - level[i + 1];
    if ((direction < 0 && diff >= 0) || (direction > 0 && diff <= 0)) {
      result = false;
    }

    const diffAbs = Math.abs(diff);
    if (diffAbs < 1 || diffAbs > 3) {
      result = false;
    }
  }
  return result;
};

const mistakeFoundAt = (level: number[]): number => {
  const direction = level[0] - level[level.length - 1] > 0 ? 1 : -1;
  const isMistake = (diff: number): boolean =>
    (direction < 0 && diff >= 0) ||
    (direction > 0 && diff <= 0) ||
    Math.abs(diff) < 1 ||
    Math.abs(diff) > 3;

  for (let i = 0; i < level.length; i++) {
    if (isMistake(level[i] - level[i + 1])) {
      if (isMistake(level[i] - level[i + 2])) {
        return i;
      } else {
        return i + 1;
      }
    }
  }

  return -1;
};

const part1 = (input: string[]): number => {
  let result = 0;

  for (const report of input) {
    const levels = report.split(" ").map(Number);
    if (isReportSafe(levels)) {
      result++;
    }
  }

  return result;
};

const part2 = (input: string[]): number => {
  let result = 0;

  for (const report of input) {
    const levels = report.split(" ").map(Number);
    const mistakeIndex = mistakeFoundAt(levels);

    if (mistakeIndex > -1) {
      levels.splice(mistakeIndex, 1);
    }

    if (isReportSafe(levels)) {
      result++;
    }
  }

  return result;
};

(async () => {
  const input = await readLines(import.meta.dir);

  console.log("Part 1:", part1(input));

  console.log("Part 2:", part2(input));
})();

export { part1, part2 };
