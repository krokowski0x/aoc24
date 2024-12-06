import { prettyPrint, readLines } from "../utils";

const part1 = (input: string[][]): number => {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let currentDir = 0;
  let guardY = input.findIndex((line) => line.includes("^"));
  let guardX = input[guardY].findIndex((cell) => cell === "^");

  while (
    guardY >= 0 &&
    guardY < input.length &&
    guardX >= 0 &&
    guardX < input[0].length
  ) {
    if (
      guardY + dirs[currentDir][0] >= 0 &&
      guardY + dirs[currentDir][0] < input.length &&
      guardX + dirs[currentDir][1] >= 0 &&
      guardX + dirs[currentDir][1] < input[0].length &&
      input[guardY + dirs[currentDir][0]][guardX + dirs[currentDir][1]] === "#"
    ) {
      currentDir = (currentDir + 1) % 4;
    } else {
      input[guardY][guardX] = "X";
      guardY += dirs[currentDir][0];
      guardX += dirs[currentDir][1];
    }
  }

  prettyPrint(input);

  return input.reduce(
    (prev, curr) => prev + curr.filter((cell) => cell === "X").length,
    0
  );
};

const part2 = (input: string[][]): number => {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let currentDir = 0;
  let guardY = input.findIndex((line) => line.includes("^"));
  let guardX = input[guardY].findIndex((cell) => cell === "^");

  while (
    guardY >= 0 &&
    guardY < input.length &&
    guardX >= 0 &&
    guardX < input[0].length
  ) {
    if (
      guardY + dirs[currentDir][0] >= 0 &&
      guardY + dirs[currentDir][0] < input.length &&
      guardX + dirs[currentDir][1] >= 0 &&
      guardX + dirs[currentDir][1] < input[0].length &&
      input[guardY + dirs[currentDir][0]][guardX + dirs[currentDir][1]] === "#"
    ) {
      if (input[guardY][guardX] === "X") {
        console.log('cross!')
      }
      currentDir = (currentDir + 1) % 4;
    } else {
      if (input[guardY][guardX] === "X") {
        console.log('cross!')
      }
      input[guardY][guardX] = "X";
      guardY += dirs[currentDir][0];
      guardX += dirs[currentDir][1];
    }
  }

  prettyPrint(input);

  return input.reduce(
    (prev, curr) => prev + curr.filter((cell) => cell === "X").length,
    0
  );
};

(async () => {
  const input = await readLines(import.meta.dir, true);

  // console.log("Part 1:", part1(input.map((line) => line.split(""))));

  console.log("Part 2:", part2(input.map((line) => line.split(""))));

})();

export { part1, part2 };
