import { readLines } from "../utils";

const part1 = (input: string): number =>
  Array.from(input.matchAll(/mul\(\d{1,3}\,\d{1,3}\)/g))
    .map((match) =>
      match[0]
        .replaceAll(/mul\(|\)/g, "")
        .split(",")
        .map(Number)
        .reduce((prev, curr) => prev * curr)
    )
    .reduce((prev, curr) => prev + curr);

const part2 = (input: string): number =>
  Array.from(
    input
      .replaceAll(/(?<=don\'t\(\))(.*?)(?=do\(\))/g, "")
      .matchAll(/mul\(\d{1,3}\,\d{1,3}\)/g)
  )
    .map((match) =>
      match[0]
        .replaceAll(/mul\(|\)/g, "")
        .split(",")
        .map(Number)
        .reduce((prev, curr) => prev * curr)
    )
    .reduce((prev, curr) => prev + curr);

(async () => {
  const input = await readLines(import.meta.dir);

  console.log("Part 1:", part1(input[0]));

  console.log("Part 2:", part2(input[1]));
})();

export { part1, part2 };
