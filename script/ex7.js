class Animal {
  constructor(food, location) {
    this.food = food
    this.location = location
  }

  makeNoise() {
    alert("Animal Noise")
  }

  eat() {
    alert("Eating " + this.food)
  }

  sleep() {
    alert("Animal is sleeping")
  }
}

class Dog extends Animal {
  constructor(food, location, race, barking) {
    super(food, location)
    this.race = race
    this.barking = barking
  }

  sleep() {
    alert("Dog is sleeping")
  }

  getRace() {
    return this.race
  }

  getBarking() {
    return this.barking
  }
}

class Cat extends Animal {
  constructor(food, location, size, fur) {
    super(food, location)
    this.size = size
    this.fur = fur
  }

  sleep() {
    alert("Cat is sleeping")
  }

  getSize() {
    return this.size
  }

  getFur() {
    return this.fur
  }
}

class Horse extends Animal {
  constructor(food, location, color, speed) {
    super(food, location)
    this.color = color
    this.speed = speed
  }

  sleep() {
    alert("Horse is sleeping")
  }

  getColor() {
    return this.color
  }

  getSpeed() {
    return this.speed
  }
}

class Veterenar {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
// Reafactor use template
  treatAnimal(animal) {
     console.log("FOOD: " + animal.food + " " + " LOCATION: " + animal.location)
  }

  getName() {
    return this.name
  }

  getSurname() {
    return this.surname
  }
}

const exampleCat = new Cat("fish", "Europa", "small", "black")
const exampleDog = new Dog("meat", "Europa", "Jack Russel", "Gav")
const exampleHorse = new Horse("weed", "Balti", "Black", "NeedForSpeed")
const exampleVeterenar = new Veterenar("Serghei", "Vasiliev")
const allAnimals = [exampleCat, exampleDog, exampleHorse]

// Refactor for of
allAnimals.forEach((element) => {
  exampleVeterenar.treatAnimal(element)
 })

console.log(allAnimals);

