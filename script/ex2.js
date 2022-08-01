class Person {
  constructor (name, surname) {
    this._name = name;
    this._surname = surname
  }

  getName() {
    return  this._name;
  }

  setSurname(value) {
    this._surname = value
  }

  getSurname() {
    return  this._surname;
  }


}

const worker = new Person("Иван","Иванов")

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
worker.setSurname('Петров')
console.log(worker.getSurname()); //выведет 'Петров'
