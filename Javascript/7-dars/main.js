"use strict";

const createTodoInputElement = document.querySelector("input#add-task");
const createTodoButtonElement = document.querySelector("input#add-btn");
const clearInputButtonElement = document.querySelector("input#del-btn");
const todosWrapperElement = document.querySelector("div.new-tasks");
const searchInput = document.querySelector("input#searchInput");

const TODOS = [];

searchInput.addEventListener("keyup", search);

createTodoButtonElement.addEventListener("click", addTodo);

createTodoInputElement.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
});

function renderTodos(array) {
  todosWrapperElement.innerHTML = "";
  if (array.length) {
    document.querySelector("p#notFound").style.display = "none";
    array.forEach((todo) => {
      const newTodoElement = ` 
    <div class="task">
<input type="text" id="added-task" name='todo' disabled value="${todo}">
        <div>
            <input type="button" value="✔️" name='update' title='update task' class="update-task">
            <input type="button" value="✏️" name='rename' title='rename task' class="rename-task">
            <input type="button" value="❌" name='delete' title='delete task' class="del-task">
        </div>
    </div>
    `;

      todosWrapperElement.innerHTML += newTodoElement;
    });
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

  TODOS.unshift(todo);

  renderTodos(TODOS);
}

function search(event) {
  const value = event.target.value;

  renderTodos(TODOS.filter((todo) => todo.includes(value)));
}
