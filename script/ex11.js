const students = [
  {
    name: "John",
    marks: [1, 2, 7, 3, 4],
  },
  {
    name: "Travis",
    marks: [8, 10, 7, 5, 4],
  },
  {
    name: "Teo",
    marks: [8, 10, 7, 5, 4],
  },
  {
    name: "Will",
    marks: [10, 10, 7, 10, 10],
  },
  {
    name: "James",
    marks: [8, 10, 7, 5, 4],
  },
]

const average = (arrayOfMarks) => {
  return arrayOfMarks.reduce((previos, current) => previos + current) / arrayOfMarks.length;
}

// Первый пункт
const studentsAverage = (array) => {
  const resultingObject = {};

  for (const item of array) {
    const {name, marks} = item;
    
    resultingObject[name] = average(marks)
  }
  return resultingObject
}

// Второй пункт
const averageSmallerThanFive = (array) => {
  const resultingObject = {};

  for (const item of array) {
    const {name, marks} = item
    
    if (average(marks) < 5) {
      resultingObject[name] = average(marks)
    }
  }  
  return resultingObject
}

// Третий пункт
const maxAndMinStudentsAverage = (array) => {
  const resultingArray = []
  const object = studentsAverage(array)
  const maxAverageStudent = Object.keys(object).reduce((initial, previous) => object[initial] > object[previous] ? initial : previous)
  const minAverageStudent = Object.keys(object).reduce((initial, previous) => object[initial] < object[previous] ? initial : previous)
  
  resultingArray.push(maxAverageStudent, minAverageStudent)

  return resultingArray
}

// Четвёртый пункт
const sortedStudentsByAverage = (array) => {
  const object = studentsAverage(array)

  return Object.fromEntries(Object.entries(object).sort(([,a],[,b]) => b - a))
}

// Пятый пункт
const studentAverageGreaterThanGeneralAverage = (array) => {
  const resultingObject = {}
  const object = studentsAverage(array)
  const generalAverage = Object.values(object).reduce((a, b) => a + b) / Object.values(object).length
  
  for (const item of Object.entries(object)) {
    const [name, studentAverage] = item

    if (studentAverage > generalAverage) {
      resultingObject[name] = studentAverage
    }
  }
  return resultingObject
}

console.log(studentAverageGreaterThanGeneralAverage(students))





