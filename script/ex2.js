let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

const sumSalaries = (object) => {
  return Object.values(object).reduce((initial, next) => initial + next, 0)
}

console.log(sumSalaries(salaries))