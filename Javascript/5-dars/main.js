// // single selector
// const h1Element = document.querySelector("h1");

// console.log(h1Element.textContent);
// console.log(h1Element.innerHTML);
// console.log(h1Element.innerText);

// // multiple selector

// console.log(document.querySelectorAll("h1"));

// // innerHTML
// // innerText
// // textContent

// const newPElement = document.createElement("p");

// newPElement.textContent = "new P element";
// newPElement.classList.add("paragraph");
// newPElement.classList.add("new_p_element");
// newPElement.id = "newPElement";

// h1Element.append(newPElement);

// h1Element.innerHTML += "<p>TEST</p>";

// h1Element.remove();

// const newImgElement = document.createElement("img");
// newImgElement.src = "https://picsum.photos/200";
// document.body.append(newImgElement);

// console.log(newPElement);
// const ulElement = document.querySelector("ul");

// const todoList = [
//   {
//     id: 1,
//     title: "Kod yozish",
//     description: "lorem ipsum dolor sit amet",
//     createdAt: "13-09-2022",
//   },
//   {
//     id: 2,
//     title: "Kod yozish 2",
//     description: "lorem ipsum dolor sit amet",
//     createdAt: "13-09-2022",
//   },
//   {
//     id: 3,
//     title: "Kod yozish 3",
//     description: "lorem ipsum dolor sit amet",
//     createdAt: "13-09-2022",
//   },
// ];

// function addTodoItem(id) {
//   const todoElement = todoList.find((todo) => todo.id === id);

//   const liElement = document.createElement("li");
//   liElement.classList.add("todo_item");

//   const h1Element = document.createElement("h1");
//   h1Element.textContent = todoElement.title;

//   const spanElement = document.createElement("span");
//   spanElement.id = "id";
//   spanElement.textContent = `${todoElement.id}. `;

//   const pElement = document.createElement("p");
//   pElement.textContent = todoElement.description;

//   liElement.append(spanElement);
//   liElement.append(h1Element);
//   liElement.append(pElement);

//   ulElement.append(liElement);
// }

// function addAllTodoItems() {
//   todoList.forEach((todo) => addTodoItem(todo.id));
// }

// addAllTodoItems();

// const clockElement = document.querySelector("h1");

// function updateTime() {
//   const time = new Date();

//   const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
//   const minutes =
//     time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
//   const seconds =
//     time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

//   clockElement.textContent = `${hours}:${minutes}:${seconds}`;
// }

// setInterval(updateTime, 1000);

/* Switch Case */

// const age = 18;

// switch (age) {
//   case 19:
//     console.log(true);
//     break;

//   case 18:
//     console.log(false);
//     break;

//   default:
//     console.log(null);
//     break;
// }

// for (let index = 0; index < 10; index++) {
//   if (index === 5) {
//     continue;
//     break
//   }
//   console.log(index);
// }
