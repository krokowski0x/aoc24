const readLines = async (dir: string, example: boolean = false): Promise<string[]> => {
  const file = Bun.file(dir + `${example ? "/example.txt" : "/input.txt"}`)
  const contents = await file.text()
  const lines = contents.split("\n")

  return lines
}

const prettyPrint = (map: string[][]) => {
  map.forEach((row) => console.log(row.join('')));
};

export { readLines, prettyPrint }
