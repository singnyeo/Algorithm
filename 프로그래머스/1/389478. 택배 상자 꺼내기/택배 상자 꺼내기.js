function solution(n, w, num) {
  const columns = Array.from({ length: w }, () => []);
  let numColumn = 0;
  let indexInColumn = 0;

  for (let i = 0; i < n; i++) {
    const orderInRow = i % w;
    const row = Math.floor(i / w);

    const column = row % 2 === 0 ? orderInRow : w - 1 - orderInRow;

    columns[column].push(i + 1);

    if (i + 1 === num) {
      numColumn = column;
      indexInColumn = columns[column].length - 1;
    }
  }

  return columns[numColumn].length - indexInColumn;
}