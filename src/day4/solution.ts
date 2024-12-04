import { readLines } from "../utils";

const part1 = (input: string[][]): number => {
  let result = 0;
  const dirs = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      // Every time we encounter X
      if (input[i][j] === "X") {
        // We go in all 8 directions
        for (const [x, y] of dirs) {
          // For every direction we go 3 steps forward, checking if letters match
          if (
            ["M", "A", "S"].every(
              (value, idx) =>
                i + x * (idx + 1) >= 0 &&
                i + x * (idx + 1) < input.length &&
                j + y * (idx + 1) >= 0 &&
                j + y * (idx + 1) < input[0].length &&
                input[i + x * (idx + 1)][j + y * (idx + 1)] === value
            )
          ) {
            result++;
          }
        }
      }
    }
  }

  return result;
};

const part2 = (input: string[][]): number => {
  const results = [];
  const dirs = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      // Every time we encounter A
      if (input[i][j] === "A") {
        // We go in 4 digonal directions
        const diagonals = [];
        for (const [x, y] of dirs) {
          // For every direction we get digonals
          if (
            i + x >= 0 &&
            i + x < input.length &&
            j + y >= 0 &&
            j + y < input[0].length
          ) {
            diagonals.push(input[i + x][j + y]);
          }
        }
        if (
          diagonals.length === 4 &&
          !diagonals.includes("X") &&
          !diagonals.includes("A")
        ) {
          results.push(diagonals.join(""));
        }
      }
    }
  }

  return results.filter(
    (result) =>
      result !== "SMSM" &&
      result !== "MSMS" &&
      result.split("").sort().join("") === "MMSS"
  ).length;
};

(async () => {
  const input = await readLines(import.meta.dir);

  console.log("Part 1:", part1(input.map((row) => row.split(""))));

  console.log("Part 2:", part2(input.map((row) => row.split(""))));
})();

export { part1, part2 };
