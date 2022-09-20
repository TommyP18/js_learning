const container = document.querySelector(".todos")

// GET all TODOS
const renderTODOS = async () => {
  const res = await fetch("http://localhost:3000/todos");
  const todos = await res.json();

  let template = "";

  todos.forEach(todo => {
    template += `
      <div class="todo">
        <h2>${todo.title}</h2>
        <p><small>${todo.time}</small></p>
        <p>${todo.description}</p>
        <a href="details.html?id=${todo.id}">Details...</a>
      </div>
    `
  });

  container.innerHTML = template

}

window.addEventListener("DOMContentLoaded", () => renderTODOS())