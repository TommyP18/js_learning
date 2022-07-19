const randomNumbersGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const matrix = (rows,columns) => {
 const arr = [];

 if (rows <= 10 || columns <= 10) {
  for(let i = 0; i < rows; i++){
    arr[i] = [];

    for(let j = 0; j<columns; j++){
      arr[i][j] = randomNumbersGenerator(0, 9);
      }
    }
  }
 return arr;
}

const compareNumbers = (a, b) => {
 return a - b;
}

const myMatrix = matrix(10,10);
myMatrix.forEach(row => row.sort(compareNumbers));
console.log(myMatrix);
