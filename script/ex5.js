class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname
  }
} 

class Student extends User{
  constructor(name, surname, year) {
    super(name,surname)
    this.year = year
  }

  getCourse() {
    const thisDate = new Date()
    return (thisDate.getFullYear() - this.year)
  }

}

const worker = new Student("Nikita", "Bodrug", 2018)

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иван Иванов'
console.log(worker.year); //выведет 2018
console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2021 
//выведет 2018


