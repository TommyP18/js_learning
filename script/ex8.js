const ol = document.createElement("OL");
const addButton = document.getElementById("addElement");
const input = document.getElementById("input");

addButton.disabled = true;
document.body.append(ol);

input.addEventListener("keyup", () => {
  disableButton();
})

const disableButton = () => {
  addButton.disabled = input.value === "";
}

const alertValue = (value) => {
  alert(value)
}

const renderListElement = () => {
  const value = input.value;
  const li = document.createElement("LI");
  const span = document.createElement("span");

  span.innerHTML = value;
  
  li.addEventListener("click", () => {
    alertValue(value);
  })
  
  li.append(span);
  ol.append(li);

  input.value = "";
}

addButton.addEventListener("click", () => {
  renderListElement();
})









