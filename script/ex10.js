const num = 64;

const dividers = (number) => {
  const arr = []
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      arr.push(i)
    }
  }
  return arr
}

console.log(dividers(num))