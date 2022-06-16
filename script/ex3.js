const monthName = (date) => {
  let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  return months[date.getMonth()];
}

console.log(monthName(new Date("10/11/2009")))
console.log(monthName(new Date("11/13/2014")))