const dateOfBirth = new Date("10/18/2000");
const timeDiff = Date.now() - dateOfBirth.getTime();
const convertedTime = new Date(timeDiff)
const years = convertedTime.getFullYear();
const age = Math.abs(years - 1970)
const months = age * 12
const days = age * 365

console.log(`${age} год
${months} месяца
${days} дня`)