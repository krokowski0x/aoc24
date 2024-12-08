import { readLines, prettyPrint } from "../utils";

const part1 = (input: string[][]): number => {
  // Populate antennas map
  const antennas: Record<string, number[][]> = {};
  let antinodes: number[][] = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] !== ".") {
        if (input[i][j] in antennas) {
          antennas[input[i][j]].push([i, j]);
        } else {
          antennas[input[i][j]] = [[i, j]];
        }
      }
    }
  }

  // Generate antinodes
  for (const [type, positions] of Object.entries(antennas)) {
    const pairs = positions.flatMap((v, i) =>
      positions.slice(i + 1).map((w) => [v, w])
    );
    const nextPairs = pairs.flatMap((pair) => {
      const diff = [pair[0][0] - pair[1][0], pair[0][1] - pair[1][1]];
      const first = [pair[0][0] + diff[0], pair[0][1] + diff[1]];
      const second = [pair[1][0] - diff[0], pair[1][1] - diff[1]];

      return [first, second];
    });

    antinodes = [...antinodes, ...nextPairs];
  }

  // Filter out out-of-bounds antinodes + overlapping with antennas
  const filteredAntinodes = antinodes.filter(
    (position) =>
      position[0] >= 0 &&
      position[0] < input[0].length &&
      position[1] >= 0 &&
      position[1] < input.length
  );

  // Show results on the map
  filteredAntinodes.forEach(([x, y]) => (input[x][y] = "#"));
  prettyPrint(input);

  // Dedupe
  return Array.from(new Set(filteredAntinodes.map(JSON.stringify)), JSON.parse)
    .length;
};

const part2 = (input: string[][]): number => {
  // Populate antennas map
  const antennas: Record<string, number[][]> = {};
  let antinodes: number[][] = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] !== ".") {
        if (input[i][j] in antennas) {
          antennas[input[i][j]].push([i, j]);
        } else {
          antennas[input[i][j]] = [[i, j]];
        }
      }
    }
  }

  // Generate antinodes
  for (const [type, positions] of Object.entries(antennas)) {
    const pairs = positions.flatMap((v, i) =>
      positions.slice(i + 1).map((w) => [v, w])
    );

    const nextPairs = pairs.flatMap((pair) => {
      let x1 = pair[0][0];
      let y1 = pair[0][1];
      let x2 = pair[1][0];
      let y2 = pair[1][1];
      const result = [];
      const diff = [x1 - x2, y1 - y2];

      while (
        x1 >= 0 &&
        x1 < input.length &&
        y1 >= 0 &&
        y1 < input.length
      ) {
        result.push([[x1, y1]]);

        x1 += diff[0];
        y1 += diff[1];
      }

      while (
        x2 >= 0 &&
        x2 < input.length &&
        y2 >= 0 &&
        y2 < input.length
      ) {
        result.push([[x2, y2]]);

        x2 -= diff[0];
        y2 -= diff[1];
      }
      return result.flat();
    });

    antinodes = [...antinodes, ...nextPairs];
  }

  // Show results on the map
  antinodes.forEach(([x, y]) => (input[x][y] = "#"));
  prettyPrint(input);

  // Dedupe
  return Array.from(new Set(antinodes.map(JSON.stringify)), JSON.parse).length;
};

(async () => {
  const input = await readLines(import.meta.dir, );

  // console.log("Part 1:", part1(input.map((line) => line.split(""))));

  console.log("Part 2:", part2(input.map((line) => line.split(""))));
})();

export { part1, part2 };
