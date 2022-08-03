// refactor using regex
// mail regex
// domain 
// 1 http://xxxxxx.xxxx
// 2 https://xxxxxx.xxxx
// 3 xxxxxx.xxxx
class Validator {
  constructor() {

  }

   isEmail(str) {
    const email = str.match(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)
    return email !== null
  }

   isDomain(str) {
    const domain = str.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/)
    return domain !== null
  }

   isDate(str) {
    const date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
    return date !== null;
  }

   isPhone(str) {
    const phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
    return phone !== null;
  }
}

const validator = new Validator();
console.log(validator.isEmail("asda@gmail.com"));
console.log(validator.isDomain('http://test.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+38 (096) 23-14-014'));