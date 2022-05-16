const a = 3;
const b = 2;
const c = 6;

const greatest = (a > b && a > c) ? alert(a): (b > a && b > c) ? alert(b) : alert(c);
const smallest = (a < b && a < c) ? alert(a): (b < a && b < c) ? alert(b) : alert(c);

console.log(greatest);
console.log(smallest);
