// const arrayOfNumber = Array.from(Array(100).keys())
const arrayOfNumber = [...new Array(100).keys()];

const odds = arrayOfNumber.filter((number) => {
  return (number % 2 !== 0);
}).reverse()

const evens = arrayOfNumber.filter((number) => {
  return number % 2 == 0;
});

const result = evens.reduce((array, element, i) => {
  array.push(element, odds[i]);
  return array;
}, []);

console.log(result)