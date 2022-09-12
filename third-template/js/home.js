const foodButtons = document.querySelectorAll(".food-button")

foodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    classCheck(button);
  })
})

const classCheck = (element) => {
  const isActive = !element.classList.contains("active");

  if (isActive) {
    element.classList.add("active")
  } else {
    element.classList.remove("active")
  }
}