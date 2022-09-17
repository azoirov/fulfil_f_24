// const button = document.querySelector("button");

// event listener
// button.addEventListener("click", buttonClickHandler);
// button.addEventListener("dblclick", function () {
//   console.log("dbclick");
// });

// function buttonClickHandler() {
//   console.log("click");
// }

// function buttonDbClickHandler() {
//   console.log("dblclick");
// }

const students = ["Student 1", "Student 2"];

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  const value = inputEl.value.trim();
  if (!value) {
    inputEl.value = "";
    inputEl.focus();
    return alert("Type student name");
  }

  students.push(value);
  renderStudents();
  inputEl.value = "";
  inputEl.focus();
}

function renderStudents() {
  const studentsList = document.querySelector("ul");
  studentsList.innerHTML = "";

  students.forEach((student) => {
    studentsList.innerHTML += `<li>${student}</li>`;
  });
}

renderStudents();

// lamp

let lampState = false;

const turnBtn = document.querySelector("button.lamp_btn");
const lampImg = document.querySelector("img");

const lampStates = {
  on: `./images/lamp_on.png`,
  off: `./images/lamp_off.png`,
};

const turnBtnStates = {
  on: "Yoqish",
  off: "O'chirish",
};

turnBtn.addEventListener("click", changeLampState);

function changeLampState() {
  switch (lampState) {
    case false:
      lampState = true;
      lampImg.src = lampStates.on;
      turnBtn.textContent = turnBtnStates.off;
      break;
    case true:
      lampState = false;
      lampImg.src = lampStates.off;
      turnBtn.textContent = turnBtnStates.on;
      break;
    default:
      break;
  }
}

// background
const colors = [
  {
    title: "Qizil",
    color: "red",
  },
  {
    title: "Yashil",
    color: "green",
  },
  {
    title: "Qora",
    color: "black",
  },
  {
    title: "Sariq",
    color: "yellow",
  },
  {
    title: "Ko'k",
    color: "blue",
  },
];

const colorsWrapper = document.querySelector(".colors");
const boxElement = document.querySelector(".box");

let activeColor = colors[0].color;

boxElement.style.backgroundColor = activeColor.color;

function renderColors() {
  colorsWrapper.innerHTML = "";
  colors.forEach((color) => {
    const coloredButton = document.createElement("button");
    coloredButton.textContent = color.title;
    coloredButton.classList.add("colored_button");

    if (color.color === activeColor) {
      coloredButton.style.color = "#fff";
      coloredButton.style.backgroundColor = color.color;
    } else {
      coloredButton.style.color = color.color;
    }

    coloredButton.style.borderColor = color.color;

    boxElement.style.backgroundColor = activeColor;

    colorsWrapper.append(coloredButton);
  });
  document.querySelectorAll("button.colored_button").forEach((el) => {
    el.addEventListener("click", handleColorChange);
  });
}

renderColors();

function handleColorChange(event) {
  const color = event.target.style.borderColor;

  activeColor = color;

  renderColors();
}
