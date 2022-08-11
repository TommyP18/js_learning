const taskForm = document.querySelector(".task-form")
const taskInput = document.querySelector(".task-input")
const taskList = document.querySelector(".task-list")
let tasks = []

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value);
  countTasks();
})

const countTasks = () => {
  const taskCounter = document.getElementById("counter");
  const counter = tasks.length

  taskCounter.innerHTML = `Tasks for solving ${counter}`
}

const addTask = (item) => {
  if (item !== "") {
    const task = {
      id: Date.now(),
      name: item
    };

    tasks.push(task)
    addToLocalStorage(tasks)
    taskInput.value = "";
  }
}


const renderTasks = (tasks) => {
  taskList.innerHTML = "";

  for (const item of tasks) {
    const li = document.createElement("li")
  li.setAttribute("class", "task")
  li.setAttribute("data-key", item.id)

  li.innerHTML = `
    <span class="item-name">${item.name}</span>
    <button class="delete-button">X</button>
    <button class="edit-button">E</button>
  `;

  taskList.append(li);
  }
  
}

const addToLocalStorage = (tasks) => {
  localStorage.setItem("tasklist", JSON.stringify(tasks));
  renderTasks(tasks)
}

const getFromLocalStorage = () => {
  const reference = localStorage.getItem("tasklist")

  if (reference) {
    tasks = JSON.parse(reference);
    renderTasks(tasks);
  }
  countTasks();
}

getFromLocalStorage();

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    deleteTask(e.target.parentElement.getAttribute("data-key"));
  }

  if (e.target.classList.contains("edit-button")) {
    editTask(e.target.parentElement.getAttribute("data-key"), e.target.parentElement)
    
  }
})

const editTask = (id, elem) => {
  const editInput = document.createElement("input");
  const editButton = document.createElement("button");

  editButton.innerHTML = "Confirm"

  editButton.addEventListener("click", () => {
    tasks = tasks.map((item) => {
      if (item.id == id) {
        return {...item, name: editInput.value}
      }
      return item
    })

    elem.remove(editInput, editButton)
    addToLocalStorage(tasks);
  })
  
  
  elem.after(editInput, editButton)
}

const deleteTask = (id) => {
  tasks = tasks.filter((item) => {
    return item.id != id;
  });

  countTasks();
  addToLocalStorage(tasks);
}


