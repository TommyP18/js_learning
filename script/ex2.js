const intervalEvenSum = (firstNumber, secondNumber) => {
  let sum = 0;

  for (let i = firstNumber; i <= secondNumber; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(intervalEvenSum(2,6))