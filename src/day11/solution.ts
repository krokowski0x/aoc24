import { readLines } from "../utils";

const cleanup = (input: string): string => {
  while (input.startsWith("0")) {
    input = input.slice(1);
  }
  return input;
};

const transform = (input: number[]): number[] => {
  return input.flatMap((element) => {
    if (element === 0) {
      return 1;
    }

    if (String(element).length % 2 === 0) {
      const asString = String(element);
      return [
        asString.slice(0, asString.length / 2),
        asString.slice(asString.length / 2),
      ]
        .map(cleanup)
        .map(Number);
    }

    return element * 2024;
  });
};

const part1 = (input: number[], blinks: number): number => {
  for (let i = 0; i < blinks; i++) {
    input = transform(input);
    // Save intermediate results
    Bun.write(`src/day11/blinks/${i}.json`, JSON.stringify({input}))
  }

  return input.length;
};

(async () => {
  const input = await readLines(import.meta.dir, true);

  console.log("Part 1:", part1(input[0].split(" ").map(Number), 25));

  console.log("Part 2:", part1(input[0].split(" ").map(Number), 75));
})();

export { part1 };
