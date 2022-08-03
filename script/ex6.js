const persons = [{
  FIO: "Bodrug Nichita Ion",
  birthDate: "2000-10-18",
  adress: "Sevcenko 52",
  male: true,
  IDNP: 1235443534,
  birthPlace: "Balti, R.Moldova",
  contacts: {
    email: "bodrugnikita18@gmail.com",
    phoneNumber: "+37369121612",
    houseNumber: "+023136702"
  },
  job: {
    post: "FrontEnd Developer",
    divisionName: "Frontend Power IT",
    experience: 2,
    sallary: 18000,
    hireDate: "2022-09-18",
    workSchedule: {
    workTime: "8:00 - 17:00",
    break: "12:00 - 13:00"
    }
  }
},
{
  FIO: "Bodrug Vladimir Ion",
  birthDate: "2006-10-18",
  adress: "Sevcenko 52",
  male: true,
  IDNP: 1235443534,
  birthPlace: "Balti, R.Moldova",
  contacts: {
    email: "bodrugnikita18@gmail.com",
    phoneNumber: "+37369121612",
    houseNumber: "+023136702"
  },
  job: {
    post: "FrontEnd Developer",
    divisionName: "Frontend Power IT",
    experience: 2,
    sallary: 13000,
    hireDate: "2022-09-18",
    workSchedule: {
    workTime: "8:00 - 17:00",
    break: "12:00 - 13:00"
    }
  }
},
{
  FIO: "Bodrug David Ion",
  birthDate: "2000-10-18",
  adress: "Sevcenko 52",
  male: true,
  IDNP: 1235443534,
  birthPlace: "Balti, R.Moldova",
  contacts: {
    email: "bodrugnikita18@gmail.com",
    phoneNumber: "+37369121612",
    houseNumber: "+023136702"
  },
  job: {
    post: "FrontEnd Developer",
    divisionName: "Frontend Power IT",
    experience: 3,
    sallary: 8000,
    hireDate: "2022-09-18",
    workSchedule: {
    workTime: "8:00 - 17:00",
    break: "12:00 - 13:00"
    }
  }
}]



const showEmployeers = (array) => {
  return array.map(({FIO}) => FIO)
}

console.log(showEmployeers(persons))

const salaryAverage = (array) => {
  return array.map(({job}) => job.sallary).reduce((previous, current) => previous + current) / array.length
}

console.log(salaryAverage(persons))

const minSalary = (array) => {
  return array.map(({job}) => job.sallary).reduce((accumulator,currentValue) => {
    return (accumulator < currentValue ? accumulator : currentValue);
  })
}

console.log(minSalary(persons))

const maxSalary = (array) => {
  return array.map(({job}) => job.sallary).reduce((accumulator,currentValue) => {
    return (accumulator > currentValue ? accumulator : currentValue);
  })
}

console.log(maxSalary(persons))

const sumSalary = (array) => {
  return array.map(({job}) => job.sallary).reduce((a, b) => a + b)
}

console.log(sumSalary(persons))

document.getElementById("employeers").innerHTML = JSON.stringify(showEmployeers(persons), null, 4)
document.getElementById("salaryAverage").innerHTML = "Average salary is: " + salaryAverage(persons);
document.getElementById("minSalary").innerHTML = "Minimal salary is: " + minSalary(persons);
document.getElementById("maxSalary").innerHTML = "Maximal salary is: " + maxSalary(persons);
document.getElementById("sumSalary").innerHTML = "Sum of the employyers salary is: " + sumSalary(persons);