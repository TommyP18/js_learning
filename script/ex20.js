const input = document.getElementById("input");
const table = document.getElementById("table");
const addButton = document.getElementById("addButton")

const createCell = () => {
  const cell = document.createElement("td");
  const removeBtn = document.createElement("button");
  const row = document.createElement("tr");

  removeBtn.innerHTML = "X";
  removeBtn.addEventListener("click", () => {
    row.remove();
  });
  cell.innerHTML = input.value;

  row.append(cell,removeBtn);
  table.append(row);

  input.value = "";
}

addButton.addEventListener("click", () => {
  createCell()
})

