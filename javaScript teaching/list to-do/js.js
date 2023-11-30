//i; let yourNumber = prompt("Введите число");
// yourNumber--;
// document.write(yourNumber);

// let hour = 00;
// if (hour >= 5 && hour <= 10) {
//   console.log("Kutman tan");
// } else if (hour > 10 && hour <= 18) {
//   console.log("Kuyman kun");
// } else if (hour > 18 && hour <= 22) {
//   console.log("kutman kech");
// } else {
//   console.log("kutman tun");
// }

// let user = "Azgamat";
// if (user == "Azamat") {
//   console.log("Hello Azamat");
// } else {
//   console.log("hello user");
// }

// let user = "";

// if (user) {
//   console.log("Hello " + user);
// } else {
//   console.log("I don't who you are!");
// }

// let user = "";
// user ? console.log("Hello " + user) : console.log("I don't who you are");

// function
// function erlan() {
//   console.log("Hello World!");
// }
// erlan();

// function erlan() {
//   let user = prompt("What is your name?");
//   alert("Hello " + user);
// }
// erlan();
// erlan();

// let user = prompt("What is your name?");
// function erlan(userName) {
//   alert("Hello " + userName);
// }
// erlan(user);

// function erlan(userName) {
//   alert("Hello " + userName);
// }
// erlan("Erlan");
// erlan("Mirlan");

// function calcSum(num1, num2) {
//   console.log(num1 + num2);
// }
// calcSum(1, 1);
// calcSum(199, 1);

// function calcSum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// console.log(calcSum(10, 10));

// function calcSum(num1, num2) {
//   return num1 + num2;
// }
// console.log(calcSum(1, 2));

// function calcSum(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     console.log("Check your args");
//     return "typeof arg1: " + typeof num1 + " typeof arg2: " + typeof num2;
//   }
// }
// console.log(calcSum(12, 0));

// function calcSum(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     console.error("wrong args types");
//     return "typeof arg1: " + typeof num1 + " typeof arg2: " + typeof num2;
//   }
// }
// console.log(calcSum(12, "p"));

// function greet(userName) {
//   console.log(`Hello ${userName}`);
// }
// greet("erln");

// function calcSum(a, b) {
//   return a + b;
// }
// let result = calcSum(1, 2);
// console.log(result);

// const erlan = function (a, b) {
//   return a + b;
// };
// console.log(erlan(1, 2));

// const greet = (a, b) => {
//   return a + b;
// };
// console.log(greet(79, 79));

// let greet = (a) => {
//   return a;
// };
// console.log(greet(444));

// function erlan() {
//   let greet = "10";
//   let num1 = Number(greet);
//   console.log(typeof num1);
// }
// erlan();

// function inArray(text, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === text) return true;
//   }
//   return false;
// }
// console.log(inArray("omg", ["hello", "ggf", "fddfd", "omg"]));

// function erlan(num1) {
//   if (num1 % 2 === 0) {
//     document.write(true);
//   } else {
//     document.write(false);
//   }
// }
// erlan(23);

//циклы while...

// let potatoes = 10;
// while (potatoes > 0) {
//   potatoes--;
//   console.log(`Potatoes left: ${potatoes}`);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let erlan = ["erlann", "mirlan", "asan", "uson"];
// let i = 0;
// while (i < erlan.length) {
//   console.log(`salam ${erlan[i]}`);
//   i++;
// }

// let erlan = 2;
// let i = 0;
// while (i <= 10) {
//   console.log(`2 * ${i} = ${erlan * i}`);
//   i++;
// }

// let i = 2;
// while (i <= 9) {
//   let j = 1;
//   while (j <= 10) {
//     console.log(`${i} * ${j} = ${j * i}`);
//     j++;
//   }
//   i++;
// }

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let erlan = ["erlann", "mirlan", "asan", "uson"];
// for (let i = 0; i < erlan.length; i++) {
//   console.log(`salam ${erlan[i]}`);
// }

// let erlan = ["erlann", "mirlan", "asan", "uson"];
// for (user in erlan) {
//   console.log(`salam ${erlan[user]}`);
// }

// let erlan = ["erlann", "mirlan", "asan", "uson"];
// for (user of erlan) {
//   console.log(`salam ${user}`);
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 4);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 2) continue;
//   console.log(i);
// }

// function peerPotatoes(param) {
//   console.log(`potatoes left ${param}`);
//   param--;
//   if (param > 0) {
//     peerPotatoes(param);
//   }
// }
// peerPotatoes(5);

// function erlan(num1) {
//   for (num1 = 0; num1 <= 50; num1++) {
//     console.log(num1);
//   }
// }
// erlan(50);

// function erlan(num1) {
//   for (num1 = 50; num1 >= 0; num1--) {
//     console.log(num1);
//   }
// }
// erlan(50);

// let erlan = [2, 5, 3, 9, 15, 0, 4];

// for (let i = 0; i < erlan.length; i++) {
//   if (erlan[i] > 2 && erlan[i] < 5) {
//     console.log(`${erlan[i]}`);
//   }
// }

// let time = 6;
// switch (time) {
//   case 5:
//     console.log("Good morning");
//     break;
//   case 12:
//     console.log("Good day");
//     break;
//   case 18:
//     console.log("Good evening");
//     break;
//   default:
//     console.log("Good night");
// }

//   ----------------20.10.22 события в JavaScript------------------

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   alert("hello");
// });

// let btn = document.querySelector(".btn");
// btn.addEventListener("mouseenter", function () {
//   alert("hello");
// });

// let btn = document.querySelector(".btn");
// btn.addEventListener("mouseleave", function () {
//   alert("hello");
// });

// let btn = document.querySelector(".btn");
// let title = document.querySelector(".title");
// btn.addEventListener("click", function () {
//   title.remove() = "none";
// });

// let btn = document.querySelector(".btn");
// let title = document.querySelector(".title");
// btn.addEventListener("click", function () {
//   title.classList.add("active");
// });

// let box = document.querySelectorAll(".box");
// box.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.add("active");
//   });
// });

// let box = document.querySelectorAll(".box");
// box.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });

// let box = document.querySelector(".box");
// box.addEventListener("click", addClass);
// function addClass(e) {
//   console.log(e.target);
// }

// let box = document.querySelector(".box");
// box.addEventListener("click", addClass);
// function addClass(e) {
//   e.target.parentNode.classList.add("active");
// }
//------===-------
// let block = document.querySelector(".block");
// block.addEventListener("keydown", function (e) {
//   block.style.background = "yellow";
// });
// document.addEventListener("keypress", function (e) {
//   console.log(e);
//   if (e.code === "KeyS") {
//     console.log("hello");
//   }
// });
//   let input = document.querySelector(".input");
//   let btn = document.querySelector("button");
//   btn.addEventListener("click", function () {
//     let userInput = input.value;
//     // input.value = "";
//     console.log(userInput);
//   });
//--------==--------------
//   let form = document.querySelector("#add-todo-form");
//   let todoList = document.querySelector("#todo-output");
//   let todoInput = document.querySelector("#input-todo");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let todoItem = document.createElement("div");
//     todoItem.innerText = todoInput.value;
//     todoItem.classList.add("todo-item");
//     todoList.appendChild(todoItem);
//     todoInput.value = "";
//     todoItem.addEventListener("click", function () {
//       todoItem.remove();
//     });
//   });
//===-----====
//   let container = document.querySelector(".container");
//   let ul = document.querySelector("ul");
//   let li = document.querySelector("li");
//   li.addEventListener("click", () => {
//     console.log("li");
//   });
//   ul.addEventListener(
//     "click",
//     () => {
//       console.log("ul");
//     },
//     true
//   );
//   container.addEventListener(
//     "click",
//     (e) => {
//       e.stopPropagation();
//       console.log("container");
//     },
//     true
//   );
//==----====
//03.11.22------++++++++
// let container = document.querySelector(".container");
// container.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });

//====----====
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clrBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasks);
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clrBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure??")) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add task!");
  }
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class='fa fa-remove'></i>";

  li.appendChild(link);
  taskList.appendChild(li);

  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = "";
  e.preventDefault();
}
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
//=====----------
// const num1 = 25;
// console.log(localStorage.getItem("num1"));
//localStorage.setItem("num1vvv", num1);
//localStorage.removeItem("num1");
//localStorage.clear();

// const user = {
//   name: "John",
//   age: 30,
// };
// localStorage.setItem("user", JSON.stringify(user));
