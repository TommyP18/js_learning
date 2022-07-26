const ol = document.createElement("OL")
const addButton = document.getElementById("addElement")
const input = document.getElementById("input")

addButton.disabled = true
document.body.append(ol)

input.addEventListener("keyup", () => {
  if (input.value == "") addButton.disabled = true
  else addButton.disabled = false
})

addButton.addEventListener("click", () => {
  const li = document.createElement("LI")
  li.innerHTML = `<a href="#" onclick ="alert('${input.value}')">${input.value}</a>`
  ol.append(li)
  input.value = ""
})







