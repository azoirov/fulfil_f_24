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
      e.target.parentElement.previousElementSibling.disabled = false;
      console.log(e.target.parentElement.parentElement.id);
    });
  });
}

//
function findMinCount(array) {
  const min = Math.min(...array);

  let count = 0;

  for (let number of array) {
    if (number === min) {
      count++;
    }
  }

  console.log(count);
  return count;
}

findMinCount([6, 1, 5, 7, 12, 1, 9, 72, 1, 81]);
