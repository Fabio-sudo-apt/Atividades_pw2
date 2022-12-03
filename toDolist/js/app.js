const buttonTask = document.getElementById("add_tarefa");
const task = document.getElementById("tarefa");
const list = document.getElementById("a-fazer");
const vazio = document.getElementsByClassName("lista-vazia")[0];
const feito = document.getElementById("feito")
let toDolist = [];

buttonTask.addEventListener("click", (event) => {
  event.preventDefault();
  const li = document.createElement("li");

  li.setAttribute('onclick', 'itemClickFeito(this)')
  const text = document.createTextNode(task.value);

  li.appendChild(text);
  list.appendChild(li);
  toDolist.push(task.value);
  task.value = "";
});

function itemClickFeito(e){
  e.removeAttribute("onclick")
  e.setAttribute('onclick', 'itemClickAfazer(this)')
  feito.appendChild(e)
}

function itemClickAfazer(e){
  e.removeAttribute("itemClickFeito")
  e.setAttribute('onclick', 'itemClickFeito(this)')
  list.appendChild(e)
}