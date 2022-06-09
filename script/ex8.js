const weekDays = {
	"Mo": "Понедельник",
	"Tu": "Вторник",
	"We": "Среда",
	"Th": "Четверг",
	"Fr": "Пятница",
	"Sa": "Суббота",
	"Su": "Воскресенье",
}

const filter = (week) => {
 const array = Object.entries(week)

 array.map((element) => {
   if (element[1] === "Понедельник") {
     element[1] = "Luni"
   } else if (element[1] === "Вторник") {
    element[1] = "Marti"
  } else if (element[1] === "Среда") {
    element[1] = "Miercuri"
  } else if (element[1] === "Четверг") {
    element[1] = "Joi"
  } else if (element[1] === "Пятница") {
    element[1] = "Vineri"
  } else if (element[1] === "Суббота") {
    element[1] = "Sambata"
  } else {
    element[1] = "Duminica"
  }
 });
 return Object.fromEntries(array)
}

console.log(filter(weekDays))