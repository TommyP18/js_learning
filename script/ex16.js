const input = document.getElementById("input")

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    alert("Enter a number pls")
    input.value = ""
  }
})