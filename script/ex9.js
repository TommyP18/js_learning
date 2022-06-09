const weekDays = {
  "Luni": "Mo",
  "Marti": "Tu",
  "Miercuri": "We",
  "Joi": "Th",
  "Vineri": "Fr",
  "Sambata": "Sa",
  "Duminica": "Su",
}

const reverse = (week) => {
  const array = Object.entries(week)
  array.filter((element) => {
   [element[0], element[1]] = [element[1], element[0]]
  })
  return Object.fromEntries(array)
}

console.log(reverse(weekDays))