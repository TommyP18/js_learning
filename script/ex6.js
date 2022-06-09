const arrayOfObjects = [
  {x: 1, y: 2}, 
  {x: 3, y: 4}, 
  {x: null, y: 4}, 
  {x: 3, y: undefined},
];

const filterArray = (array) => {
  array.forEach((item) => {
    const {x, y} = item;

    if (typeof x !== "number" || typeof y !== "number") {
      delete array[array.indexOf(item)];
    } 
  })
  return array;
}

console.log(filterArray(arrayOfObjects))