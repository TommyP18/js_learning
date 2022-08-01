class Validator {
  constructor() {

  }

  static isEmail(str) {
      return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
  }

  static isDomain(str) {
      return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
  }

  static isDate(str) {
      let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
      return date === null ? false : true;
  }

  static isPhone(str) {
      let phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
      return phone === null ? false : true;
  }
}
let validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('test.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+38 (096) 23-14-014'));