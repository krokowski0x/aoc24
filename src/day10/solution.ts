import { readLines } from "../utils";

const getTrails = (input: number[][]) => {
  const trailheads = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[j][i] === 0) {
        trailheads.push([j, i]);
      }
    }
  }

  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const findTrails = (location: number[]) => {
    const trails = [];
    const stack = [location];

    while (stack.length) {
      const [y, x] = stack.pop();

      if (input[y][x] === 9) {
        trails.push(`${y},${x},${input[y][x]}`); // sth unique
      }

      for (const [dy, dx] of dirs) {
        const newY = y + dy;
        const newX = x + dx;

        // No need to check out of bounds!
        if (input[newY]?.[newX] === input[y][x] + 1) {
          stack.push([newY, newX]);
        }
      }
    }

    return trails;
  };

  return trailheads.map(findTrails);
};

const part1 = (input: number[][]): number =>
  getTrails(input)
    .map((trail) => new Set(trail).size)
    .reduce((a, b) => a + b);

const part2 = (input: number[][]): number =>
  getTrails(input)
    .map((trail) => trail.length)
    .reduce((a, b) => a + b);

(async () => {
  const input = await readLines(import.meta.dir, true);

  console.log("Part 1:", part1(input.map((val) => val.split("").map(Number))));

  console.log("Part 2:", part2(input.map((val) => val.split("").map(Number))));
})();

export { part1, part2 };
