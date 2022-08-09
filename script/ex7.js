const matrixCreation = () => {
  const size = 5
  // const matrix = new Array(size).fill(0).map(() => new Array(size).fill(0))
  const matrix = [...new Array(size)].map(() => [...new Array(size)].fill(0))
  let value = 0;

  for (let i = 0; i < size; i++) {
    matrix[i][i] = value++
  }
  
  const create = (i, j) => {
    while ((i < size) && (j < size)) {
      matrix[i][j] = value;
      console.log(i, j, value);
      value++;
      i++;
      j++;
    }
  }
  let i = 0;
  let j = 1;

  while (j < size) {
    create(i, j);
    create(j, i)
    j++
  }
  console.log(matrix)
}

matrixCreation()