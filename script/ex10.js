const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1]
const uniqueSorted = (arr) => [...new Set(arr)].sort((firstNum, secondNum) => firstNum - secondNum)

console.log(uniqueSorted(array))
