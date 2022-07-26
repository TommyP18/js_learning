const reduceButton = document.getElementById("btnReduce");
const increaseButton = document.getElementById("btnIncrease");
let input = document.getElementById("input");

increaseButton.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1

  reduceButton.disabled = false
  if(input.value > 8) increaseButton.disabled = true
})

reduceButton.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1
  increaseButton.disabled = false
  if(input.value < 1) reduceButton.disabled = true
})





