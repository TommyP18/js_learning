const input = document.getElementById("input");

input.addEventListener("blur", () => {
  if (isNaN(input.value)) {
    input.value = "";
  }
})

