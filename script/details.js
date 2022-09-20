const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details")
const deleteBtn = document.querySelector(".deleteButton")
const editBtn = document.querySelector(".editButton")
const patchBtn = document.querySelector(".patchButton")
const editForm = document.querySelector(".edit-form");
const patchForm = document.querySelector(".patch-form")

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/todos/" + id);
  const todo = await res.json();

  const template = `
  <h1>${todo.title}</h1>
  <p>${todo.description}</p>
  <p>${todo.time}</p>
  `

  container.innerHTML = template
}

const confirmEdit = async (e) => {
    e.preventDefault();

    const doc = {
      title: editForm.editTitle.value,
      description: editForm.editDesc.value,
      time: editForm.editTime.value
    }

    await fetch("http://localhost:3000/todos/" + id, {
      method: "PUT",
      body: JSON.stringify(doc),
      headers: {"Content-Type": "application/json"}
    })

    window.location.replace("index.html")
  }

const createEditForm = () => {
  const template = `
  <input name="editTitle" placeholder="Edit the todo title">
  <textarea name="editDesc" placeholder="Edit the todo description"></textarea>
  <input name="editTime" placeholder="Edit the todo time">
  <button class="confirmButton" type="submit">Confirm</button>
  `;

  editForm.innerHTML = template

  editForm.addEventListener("submit", confirmEdit)
}

 const confirmPatch = async (e) => {
  e.preventDefault();

  const doc = {
    title: patchForm.patchTitle.value,
  }

  await fetch("http://localhost:3000/todos/" + id, {
    method: "PATCH",
    body: JSON.stringify(doc),
    headers: {"Content-Type": "application/json"}
  })

  window.location.replace("index.html")
 }

const createPatchForm = () => {
  const template = `
  <input name="patchTitle" placeholder="Edit the todo title">
  <button class="confirmButton" type="submit">Confirm</button>
  `;

  patchForm.innerHTML = template;

  patchForm.addEventListener("submit", confirmPatch)
}

editBtn.addEventListener("click", () => {
  createEditForm();
})

patchBtn.addEventListener("click", () => {
  createPatchForm();
})

const deleteTODO = async() => {
  const res = await fetch ("http://localhost:3000/todos/" + id, {
    method: "DELETE"
  });

  window.location.replace("index.html")
}

deleteBtn.addEventListener("click", async () => {
  deleteTODO();
})

window.addEventListener("DOMContentLoaded", () => {
  renderDetails();
})