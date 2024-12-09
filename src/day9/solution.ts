import { readLines } from "../utils";

const part1 = (input: number[]): number => {
  let expanded: Array<number | string> = [];

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      Array.from({ length: input[i] }).forEach((a) => expanded.push(i / 2));
    } else {
      Array.from({ length: input[i] }).forEach((a) => expanded.push("."));
    }
  }

  console.log("Before:", expanded);

  for (let i = 0; i < expanded.length; i++) {
    if (expanded[i] === ".") {
      const last = expanded.findLastIndex((val) => val !== ".");
      expanded[i] = expanded[last];
      expanded[last] = ".";
    }
  }

  console.log("After: ", expanded);

  return expanded
    .filter((val) => val !== ".")
    .map(Number)
    .reduce((prev, curr, idx) => prev + curr * idx);
};

const part2 = (input: number[]): number => {
  let expanded: Array<number | string> = [];

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      Array.from({ length: input[i] }).forEach((a) => expanded.push(i / 2));
    } else {
      Array.from({ length: input[i] }).forEach((a) => expanded.push("."));
    }
  }

  console.log("Before:", expanded.join(''));

  // TODO: Fix this hot mess
  let currentFileId = expanded.findLast((val) => val !== ".")
  for (let i = 0; i < expanded.length; i++) {
    if (expanded[i] === ".") {
      // Get the whole block from the end, e.g. 999
      const last = expanded.findLastIndex((val) => val === currentFileId);
      const first = expanded.findIndex((val) => val === currentFileId);
      const length = last - first + 1;
      // If we have enough space, move the block here
      console.log(expanded.slice(first,last + 1).join(''), length, currentFileId)

      if (expanded.slice(i, i + length).join('') === ".".repeat(length)) {
        Array.from({ length: length }).forEach((val, idx) => {
          expanded[i + idx] = expanded[last - idx];
          expanded[last - idx] = ".";
        });
      }
      currentFileId--

    }
  }

  console.log("After: ", expanded.join(''));

  return expanded
    .filter((val) => val !== ".")
    .map(Number)
    .reduce((prev, curr, idx) => prev + curr * idx);
};

(async () => {
  const input = await readLines(import.meta.dir, true);

  // console.log("Part 1:", part1(input[0].split('').map(Number)));

  console.log("Part 2:", part2(input[0].split("").map(Number)));
})();

export { part1, part2 };
