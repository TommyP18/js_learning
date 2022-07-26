const input = document.getElementById("input")
const table = document.getElementById("table")

addButton.addEventListener("click", () => {
  const cell = document.createElement("td")
  const removeBtn = document.createElement("button")
  const row = document.createElement("tr")

  removeBtn.addEventListener("click", (el) => {
    row.remove()
  })

  cell.innerHTML = input.value
  removeBtn.innerHTML = "X"
  row.append(cell,removeBtn)
  table.append(row)
  input.value = ""
})

