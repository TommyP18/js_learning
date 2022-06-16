const curday = (separator) => {
  const today = new Date();
  let dd = today.getDay();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd
  }

  if (mm < 10) {
    mm = "0" + mm
  }
  return (dd + separator + mm + separator + yyyy);
}

console.log(curday("/"));
console.log(curday("-"))