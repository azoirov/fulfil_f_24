"use strict";

const createTodoInputElement = document.querySelector("input#add-task");
const createTodoButtonElement = document.querySelector("input#add-btn");
const clearInputButtonElement = document.querySelector("input#del-btn");
const todosWrapperElement = document.querySelector("div.new-tasks");
const searchInput = document.querySelector("input#searchInput");

const TODOS = localStorage.getItem("TODOS")
  ? JSON.parse(localStorage.getItem("TODOS"))
  : [];

localStorage.setItem("TODOS", JSON.stringify(TODOS));

searchInput.addEventListener("keyup", search);

createTodoButtonElement.addEventListener("click", addTodo);

clearInputButtonElement.addEventListener("click", resetInput);

createTodoInputElement.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
});

searchInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

function renderTodos(array) {
  todosWrapperElement.innerHTML = "";
  if (array.length) {
    document.querySelector("p#notFound").style.display = "none";
    array.forEach((todo) => {
      const newTodoElement = ` 
    <div class="task" id="${todo.id}">
        <input type="text" id="added-task" name='todo' disabled value="${todo.title}">  
        <div>
            <input type="button" value="✔️" name='update' title='update task' class="update-task">
            <input type="button" value="✏️" name='rename' title='rename task' class="rename-task">
            <input type="button" value="❌" name='delete' title='delete task' class="del-task">
        </div>
    </div>
    `;
      todosWrapperElement.innerHTML += newTodoElement;
    });
    editBtnEventListener();
    removeItems();
  } else {
    document.querySelector("p#notFound").style.display = "block";
  }
}

renderTodos(TODOS);

function addTodo() {
  const todo = createTodoInputElement.value.trim();
  if (!todo) {
    return;
  }

  const newElement = {
    id: TODOS.length + 1,
    title: todo,
  };

  TODOS.unshift(newElement);

  localStorage.setItem("TODOS", JSON.stringify(TODOS));

  resetInput();

  renderTodos(TODOS);
}

function search(event) {
  const value = event.target.value;

  renderTodos(TODOS.filter((todo) => todo.title.includes(value)));
}

function editBtnEventListener() {
  const editBtns = document.querySelectorAll("input.rename-task");
  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const todoItemInput = e.target.parentElement.previousElementSibling;
      todoItemInput.disabled = false;

      const saveBtn = e.target.previousElementSibling;

      saveBtn.addEventListener("click", (event) => {
        const id = Number(e.target.parentElement.parentElement.id);
        const title =
          e.target.parentElement.previousElementSibling.value.trim();

        const todoElement = TODOS.find((todo) => todo.id === id);
        todoElement.title = title;

        const index = TODOS.indexOf(todoElement);

        TODOS[index] = todoElement;

        todoItemInput.disabled = true;

        localStorage.setItem("TODOS", JSON.stringify(TODOS));
      });
    });
  });
}

function resetInput() {
  const input = document.querySelector("#add-task");
  input.value = "";
  input.focus();
}

function removeItems() {
  const deleteBtns = document.querySelectorAll("input.del-task");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.parentElement.parentElement.id);

      const index = TODOS.findIndex((el) => el.id === id);

      TODOS.splice(index, 1);

      localStorage.setItem("TODOS", JSON.stringify(TODOS));

      renderTodos(TODOS);
    });
  });
}
