import { readLines } from "../utils";

const part1 = (rules: Record<string, string[]>, input: string[][]): number => {
  let result = 0;

  for (const line of input) {
    let correct = true;
    for (let i = 0; i < line.length; i++) {
      if (line[i] in rules) {
        const before = line.slice(i + 1);
        if (
          !rules[line[i]].every(
            (rule) => !line.includes(rule) || before.includes(rule)
          )
        ) {
          correct = false;
        }
      }
    }
    if (correct) {
      const middle = line[Math.floor(line.length / 2)];
      result += Number(middle);
    }
  }

  return result;
};

const part2 = (rules: Record<string, string[]>, input: string[][]): number => {
  let result = 0;

  for (const line of input) {
    let correct = true;
    for (let i = 0; i < line.length; i++) {
      if (line[i] in rules) {
        const before = line.slice(i + 1);
        if (
          !rules[line[i]].every(
            (rule) => !line.includes(rule) || before.includes(rule)
          )
        ) {
          correct = false;
        }
      }
    }
    if (!correct) {
      line.sort((a, b) => (a in rules && rules[a].includes(b) ? -1 : 1));
      const middle = line[Math.floor(line.length / 2)];
      result += Number(middle);
    }
  }

  return result;
};

(async () => {
  const input = await readLines(import.meta.dir);
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

  console.log("Part 1:", part1(rules, updates));

  console.log("Part 2:", part2(rules, updates));
})();

export { part1, part2 };
