const persons = `[{
  "FIO": "Bodrug Nichita Ion",
  "birthDate": "2000-10-18",
  "adress": "Sevcenko 52",
  "male": true,
  "IDNP": 1235443534,
  "birthPlace": "Balti, R.Moldova",
  "contacts": {
    "email": "bodrugnikita18@gmail.com",
    "phoneNumber": "+37369121612",
    "houseNumber": "+023136702"
  },
  "job": {
    "post": "FrontEnd Developer",
    "divisionName": "Frontend Power IT",
    "experience": 2,
    "sallary": 18000,
    "hireDate": "2022-09-18",
    "workSchedule": {
    "workTime": "8:00 - 17:00",
    "break": "12:00 - 13:00"
    }
  }
},
{
  "FIO": "Bodrug Vladimir Ion",
  "birthDate": "2006-10-18",
  "adress": "Sevcenko 52",
  "male": true,
  "IDNP": 1235443534,
  "birthPlace": "Balti, R.Moldova",
  "contacts": {
    "email": "bodrugnikita18@gmail.com",
    "phoneNumber": "+37369121612",
    "houseNumber": "+023136702"
  },
  "job": {
    "post": "FrontEnd Developer",
    "divisionName": "Frontend Power IT",
    "experience": 2,
    "sallary": 13000,
    "hireDate": "2022-09-18",
    "workSchedule": {
    "workTime": "8:00 - 17:00",
    "break": "12:00 - 13:00"
    }
  }
},{
  "FIO": "Bodrug David Ion",
  "birthDate": "2000-10-18",
  "adress": "Sevcenko 52",
  "male": true,
  "IDNP": 1235443534,
  "birthPlace": "Balti, R.Moldova",
  "contacts": {
    "email": "bodrugnikita18@gmail.com",
    "phoneNumber": "+37369121612",
    "houseNumber": "+023136702"
  },
  "job": {
    "post": "FrontEnd Developer",
    "divisionName": "Frontend Power IT",
    "experience": 2,
    "sallary": 8000,
    "hireDate": "2022-09-18",
    "workSchedule": {
    "workTime": "8:00 - 17:00",
    "break": "12:00 - 13:00"
    }
  }
}]`

const convertedJSON = JSON.parse(persons)

const showEmployeers = (array) => {
 const resultingArray = []

 for (const item of array) {
  const {FIO, ...rest} = item

  resultingArray.push(FIO)
 }
 return resultingArray
}

console.log(showEmployeers(convertedJSON))

const salaryAverage = (array) => {
  const resultingArray = [];
  
  for (const item of array) {
    const {
      FIO,
      birthdate,
      adress,
      male,
      IDNP,
      birthplace,
      contacts,
      job : {
        post,
        divisonName,
        experience,
        sallary
      }
    } = item
    resultingArray.push(sallary)
  }
  return resultingArray.reduce((previous, current) => previous + current) / array.length;
}

console.log(salaryAverage(convertedJSON))

const minSalary = (array) => {
  const resultingArray = [];
  for (const item of array) {
    const {
      FIO,
      birthdate,
      adress,
      male,
      IDNP,
      birthplace,
      contacts,
      job : {
        post,
        divisonName,
        experience,
        sallary
      }
    } = item
    resultingArray.push(sallary)
  }
  return Math.min(...resultingArray)
}

console.log(minSalary(convertedJSON))

const maxSalary = (array) => {
  const resultingArray = [];

  for (const item of array) {
    const {
      FIO,
      birthdate,
      adress,
      male,
      IDNP,
      birthplace,
      contacts,
      job : {
        post,
        divisonName,
        experience,
        sallary
      }
    } = item

    resultingArray.push(sallary)
  }
  return Math.max(...resultingArray)
}

console.log(maxSalary(convertedJSON))

const sumSalary = (array) => {
  const resultingArray = [];
  for (const item of array) {
    const {
      FIO,
      birthdate,
      adress,
      male,
      IDNP,
      birthplace,
      contacts,
      job : {
        post,
        divisonName,
        experience,
        sallary
      }
    } = item
    resultingArray.push(sallary)
  }
  return  resultingArray.reduce((a, b) => a + b)
}

console.log(sumSalary(convertedJSON))

document.getElementById("employeers").innerHTML = JSON.stringify(showEmployeers(convertedJSON), null, 4)
document.getElementById("salaryAverage").innerHTML = "Average salary is: " + salaryAverage(convertedJSON);
document.getElementById("minSalary").innerHTML = "Minimal salary is: " + minSalary(convertedJSON);
document.getElementById("maxSalary").innerHTML = "Maximal salary is: " + maxSalary(convertedJSON);
document.getElementById("sumSalary").innerHTML = "Sum of the employyers salary is: " + sumSalary(convertedJSON);