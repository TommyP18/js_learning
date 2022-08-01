class Transport {
    constructor(model, prodYear, price) {
      this.model = model
      this.prodYear = prodYear 
      this.price = price
  }

  getModel() {
    return this.model
  }
  
  getAge() {
    const currentYear = new Date()
    return (currentYear.getFullYear() - this.prodYear)
  }

  movement() {
    alert("Transport is riding")
  }

  getProdYear() {
    return this.prodYear
  }
}

class Car extends Transport {
  constructor(model, prodYear, price) {
    super(model, prodYear, price)
  }

  movement() {
    alert("Двигатель запущен, езда на машине")
  }
}

class Truck extends Transport {
  constructor(model, prodYear, price) {
    super(model, prodYear, price)
  }
  movement() {
    alert("Двигатель запущен, езда на гавновозке")
  }
}

class Airplane extends Transport {
  constructor(model, prodYear, price) {
    super(model, prodYear, price)
  }
  movement() {
    alert("Двигатель запущен, полёт")
  }
}

class Mercedes extends Car {
  constructor(model, prodYear, price) {
    super(model, prodYear, price)
  }

  movement() {
    alert("Mercedes is riding low")
  }
}

class Airbus extends Airplane {
  constructor(model, prodYear, price) {
    super(model, prodYear, price)
  }

  movement() {
    alert("Plane is riding high with travis scott")
  }
}

class Boeing extends Airplane {
  constructor(model, prodYear, price) {
    super(model, prodYear, price)
  }

  movement() {
    alert("Plane is riding high with travis scott")
  }
}

class Man extends Truck {
  constructor(model, prodYear, price) {
    super(model, prodYear, price)
  }

  movement() {
    alert("BullShit is cumming")
  }
}

const testCar = new Man("S CLass", 2006, 12000)
const testFirstPlane = new Airbus("SR34000", 2004, 130000)
const testSecondPlane = new Boeing("SLR433", 2008, 140000)
const testTruck = new Man("MANO", 2001, 150000)

console.log(testCar.getModel());
console.log(testCar.getAge());
console.log(testCar.getProdYear());
console.log(testCar.movement());

console.log(testFirstPlane.getModel());
console.log(testFirstPlane.getAge());
console.log(testFirstPlane.getProdYear());
console.log(testFirstPlane.movement());

console.log(testSecondPlane.getModel());
console.log(testSecondPlane.getAge());
console.log(testSecondPlane.getProdYear());
console.log(testSecondPlane.movement());

console.log(testTruck.getModel());
console.log(testTruck.getAge());
console.log(testTruck.getProdYear());
console.log(testTruck.movement());

