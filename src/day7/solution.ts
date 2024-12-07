import { readLines } from "../utils";

function generateCombinations(
  length: number,
  withConcat: boolean = false
): string[] {
  if (length === 0) return [""];
  let result = [];
  let prevCombos = generateCombinations(length - 1, withConcat);

  for (let combo of prevCombos) {
    result.push(combo + "+");
    result.push(combo + "*");
    if (withConcat) result.push(combo + "|");
  }

  return result;
}

const part1 = (input: string[][]): number => {
  let result = [];

  for (const line of input) {
    const sum = Number(line.shift()?.slice(0, -1));
    const values = line.map(Number);
    for (const combo of generateCombinations(line.length - 1)) {
      const ops = combo.split("");

      const outcome = values.reduce((prev, curr, idx) => {
        return ops[idx - 1] === "+" ? prev + curr : prev * curr;
      });

      if (outcome === sum) {
        result.push(outcome);
      }
    }
  }

  return [...new Set(result)].reduce((a, b) => a + b);
};

const part2 = (input: string[][]): number => {
  let result = [];

  for (const line of input) {
    const sum = Number(line.shift()?.slice(0, -1));
    const values = line.map(Number);
    for (const combo of generateCombinations(line.length - 1, true)) {
      const ops = combo.split("");

      const outcome = values.reduce((prev, curr, idx) => {
        if (ops[idx - 1] === "+") {
          return prev + curr;
        }
        if (ops[idx - 1] === "*") {
          return prev * curr;
        }
        if (ops[idx - 1] === "|") {
          return Number(String(prev) + String(curr));
        }

        return prev;
      });

      if (outcome === sum) {
        result.push(outcome);
      }
    }
  }

  return [...new Set(result)].reduce((a, b) => a + b);
};

(async () => {
  const input = await readLines(import.meta.dir, true);

  console.log("Part 1:", part1(input.map((line) => line.split(" "))));

  console.log("Part 2:", part2(input.map((line) => line.split(" "))));
})();

export { part1, part2 };
