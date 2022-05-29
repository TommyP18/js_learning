const Array = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// Первый пункт
const underFive = (arr) => {
  arr.forEach(element => {
    if (element < 5){
      alert(element)
    }
  });
};

// Второй пункт
const maxAndMinElement = (arr) => {
  let temp = 0;

  arr.forEach(element => {  
    if (temp < element) {
      temp = element
    }
  })
 return temp;
};

// Третий пункт
const descArray = (arr) => arr.sort((firstNumber, secondNumber) => secondNumber - firstNumber);

// Четвёртый пункт
const average = (arr) => arr.reduce((previus, current) => previus + current, 0) / arr.length;

const greaterThanAverage = (arr) => {
  let newArray = []

  arr.forEach((element => {
    if (element > average(Array)) {
      newArray.push(element)
    }
  }))
  return newArray
}

// Вывод
console.log(greaterThanAverage(Array));
