const reduceButton = document.getElementById("btnReduce");
const increaseButton = document.getElementById("btnIncrease");
const input = document.getElementById("input");

const increaseLevel = () => {
  input.value = parseInt(input.value) + 1;
  reduceButton.disabled = false;

  if(input.value > 8) {
    increaseButton.disabled = true;
  }
}

const decreaseLevel = () => {
  input.value = parseInt(input.value) - 1;
  increaseButton.disabled = false;

  if(input.value < 1) {
    reduceButton.disabled = true;
  }
}

increaseButton.addEventListener("click", () => {
  increaseLevel();
})

reduceButton.addEventListener("click", () => {
  decreaseLevel();
})





