const form = document.querySelector("form")

const createTODO = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    description: form.description.value,
    time: form.time.value
  }

  await fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify(doc),
    headers: {"Content-Type": "application/json"}
  })

  window.location.replace("index.html")
}

form.addEventListener("submit", createTODO)