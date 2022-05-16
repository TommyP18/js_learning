const intervalEvenSum = (a, b) => {
  let s = 0;

  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      s += i;
    }
  }
  return s;
}

console.log(intervalEvenSum(2,6))