let inputName = document.querySelector(".input-name")
let cityName = document.querySelector(".city-names")
let boxes = document.querySelectorAll(".checkbox")
let textarea = document.querySelector(".textarea")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToLocalStorage();
})

form.addEventListener("reset", (e) => {
  e.preventDefault();
  clearForm();
})

const clearForm = () => {
  inputName.value = "";
  cityName.value = "";
  textarea.value = "";
  
  for (let box of boxes) {
    box.checked = false
  }
  localStorage.clear()
}

const addToLocalStorage = () => {
  localStorage.setItem("name", inputName.value)
  localStorage.setItem("city", cityName.value)
  localStorage.setItem("text", textarea.value)

  for(let i = 1; i <= boxes.length; i++) {
    const checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked)
  }
}

const getFromLocalStorage = () => {
  inputName.value = localStorage.getItem("name")
  cityName.value = localStorage.getItem("city")
  textarea.value = localStorage.getItem("text")

  for(let i = 1; i <= boxes; i++) {
    const checked = JSON.parse(localStorage.getItem("checkbox" + String(i)))
    document.getElementById(String(i)).checked = checked;
  }
}

getFromLocalStorage()
