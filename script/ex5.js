const timeConvert = (number) => {
  const hours = (number / 60)
  const roundedHours = Math.floor(hours)
  const minutes = (hours - roundedHours) * 60
  const roundedMinutes = Math.floor(minutes)

  return number + " minutes = " + roundedHours + " hours and " + roundedMinutes + " minutes";
}

console.log(timeConvert(200));