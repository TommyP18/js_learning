const input = document.getElementById("input");

const inputValidation = () => {
  if (isNaN(input.value)) {
    alert("Enter a number pls");
    input.value = "";
  }
}

input.addEventListener("keyup", () => {
  inputValidation();
})