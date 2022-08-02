const fibonacci = (number) => {
  if (number < 2) {
    return number
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

const number = prompt("Enter the number: ");

if (number <= 0) {
  console.log("Enter a positive a number");
} else {
  for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
  }
}