class FormElement {
  constructor(form) {
    this.form = document.createElement("form")
    document.body.append(this.form)
  }

  createInput(type, id, placeholder, value, rules) {
    const elem = document.createElement("input")

    elem.setAttribute("type", type);
    elem.setAttribute("id", id);
    elem.setAttribute("placeholder", placeholder);
    elem.setAttribute("value", value);
    elem.setAttribute("rules", rules);

    this.form.append(elem)
  }

  createButton(id, value) {
    const elem = document.createElement("button")

    elem.setAttribute("id", id);
    elem.innerHTML = value
    this.form.append(elem)
  }

  validate() {
    const btn = document.getElementById("submit")
    const text = document.getElementById("name")
    const age = document.getElementById("age")
    const errorAge = document.createElement("span")
    const errorName = document.createElement("span")

    errorAge.textContent = "Please enter a valid age"
    errorName.textContent = "Please enter a valid name"
    errorAge.setAttribute("class", "errorAge");
    errorName.setAttribute("class", "errorName");

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (parseInt(age.value) < 10 || age.value === "" || !isFinite(age.value) ) {
        age.style.borderColor = "red"
        age.after(errorAge)
      } else {
        age.style.borderColor = "green"
        errorAge.remove()
      }

      if (text.value === "" || isFinite(text.value)) {
        text.style.borderColor = "red"
        text.after(errorName)
      } else {
        text.style.borderColor = "green"
        errorName.remove()
      }
      
    })

  }
}

const test = new FormElement();

test.createInput("text", "name", "Имя", "John", "requiered")
test.createInput("email", "email", "Е-мэйл", "mail@mail.com", "required|mail")
test.createInput("text", "age", "Имя", "62", "required|min:10")
test.createInput("text", "birthdate", "Дата рождения", "01.01.1970", "required|date")
test.createButton("submit", "Сохранить")
test.validate()
