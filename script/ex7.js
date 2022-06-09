const person = {
  name: "Person",
  get Name() {
    return "Person name is " + this.name
  },
  age: 123,
  get Age() {
    return "Person age is " + this.age
  },
  salary: 1542.33,
  get Salary() {
    return "Person salary is " + this.salary
  },
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  get Contacts() {
    return `phone : ${this.contacts.phone} \nemail : ${this.contacts.email} `
  },
}

console.log(person.Name)
console.log(person.Age)
console.log(person.Salary)
console.log(person.Contacts)



