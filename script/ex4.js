const arrayOfNumber = Array.from(Array(10000).keys())

const result = (arr) => {
  return arr.map((x) => Math.pow(x, 2));
}

console.log(result(arrayOfNumber))