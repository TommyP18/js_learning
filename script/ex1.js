const area = document.getElementById("area");
const button = document.getElementById("btn");

const setEventListener = () => {
  localStorage.setItem("area", area.value);
}

const buttonToRemoveItem = () => {
  localStorage.removeItem("area");
  area.value = "";
}

button.addEventListener("click", () => {
  buttonToRemoveItem();
})

area.addEventListener("input", () => {
  setEventListener();
})