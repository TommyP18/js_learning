const array = [1, 2, 3, 4];

const square = (number) => number * number;

const convert = (fn, arr) => {
  const array2 = [];
  arr.forEach(element => {
   array2.push(fn(element));
 })
 return array2;
}

console.log(convert(square, array));
console.log(array);


