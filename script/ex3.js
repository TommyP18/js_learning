const factorial = (x) => {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1)
  }
} 

const number = prompt("Enter the number for processing: ")

if (number >= 0) {
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
} else {
  console.log("Enter a positive number!")
}