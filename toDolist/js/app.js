const buttonTask = document.getElementById("add_tarefa");
const task = document.getElementById("tarefa");
const list = document.getElementById("a-fazer");
const vazio = document.getElementsByClassName("lista-vazia")[0];
let toDolist = [];

buttonTask.addEventListener("click", (event) => {
  event.preventDefault();

  if (list.children[0].classList.contains("lista-vazia")) {
    list.removeChild(vazio);
  }

  const li = document.createElement("li");
  const text = document.createTextNode(task.value);

  li.appendChild(text);
  list.appendChild(li);
  toDolist.push(task.value);
  task.value = "";
});
