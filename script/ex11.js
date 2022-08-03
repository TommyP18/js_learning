class FormElement {
  constructor() {
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

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      
      if (parseInt(age.value) < 10 || age.value === "" || text.value === "") {
        age.style.borderColor = "red"
        
      } else {
        alert("Данные сохранены")
        
      }
    })

  }
}

const test = new FormElement();

test.createInput("text", "name", "Имя", "John", "requiered")
test.createInput("email", "name", "Е-мэйл", "mail@mail.com", "required|mail")
test.createInput("text", "age", "Имя", "62", "required|min:10")
test.createInput("text", "birthdate", "Дата рождения", "01.01.1970", "required|date")
test.createButton("submit", "Сохранить")
test.validate()
