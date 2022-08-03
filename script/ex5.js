// https://jsoneditoronline.org/#left=cloud.6dcc8b68cd7f45c1b454042d22230d91

const persons = {
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
}

document.getElementById("jsonContainer").innerHTML = JSON.stringify(persons, null, 4)