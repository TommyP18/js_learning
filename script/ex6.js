const number = (num) => {
  num = prompt("Write the number","");
  if (num > 0) {
    return alert(1);
  } else if (num < 0) {
    return alert(-1);
  } else if (num == 0) {
    return alert (0)
  } else {
    return alert ('Error! Enter a number')
  }
}

console.log(number())



