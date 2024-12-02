import { readLines } from "../utils";

const part1 = (input: string[]): number => {
  const first: number[] = [];
  const second: number[] = [];

  for (const line of input) {
    const values = line.split("   ");
    first.push(Number(values[0]));
    second.push(Number(values[1]));
  }

  first.sort();
  second.sort();

  return first.reduce(
    (acc, curr, i, arr) => (acc += Math.abs(curr - second[i])),
    0
  );
};

const howMany = (arr: number[], item: number): number => {
  let counter = 0;

  arr.forEach((element) => {
    if (element === item) {
      counter++
    }
  })

  return counter;
};

const part2 = (input: string[]): number => {
  const first: number[] = [];
  const second: number[] = [];

  for (const line of input) {
    const values = line.split("   ");
    first.push(Number(values[0]));
    second.push(Number(values[1]));
  }

  return first.reduce(
    (acc, curr, i, arr) => (acc += curr * howMany(second, curr)),
    0
  );
};

(async () => {
  const input = await readLines(import.meta.dir);

  console.log('Part 1:', part1(input));

  console.log('Part 2:', part2(input))
})();

export { part1, part2 }