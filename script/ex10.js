const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1]
// первый вариант
const uniqueSorted = (arr) => {
  const set = new Set(arr)
   return [...new Set(arr)].sort((firstNum, secondNum) => firstNum - secondNum)
}
// второй вариант
const uniqueSorted1 = (arr) => {
  const arrayWithNoDuplicates = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  return arrayWithNoDuplicates.sort((first,second) => first - second)
}

console.log(uniqueSorted1(array))
