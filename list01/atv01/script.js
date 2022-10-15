let num = parseInt(prompt("Digites os numeros: "));

while (num != 0) {
  num = num * num;
  document.write(num);
  num = parseInt(prompt("Digites os numeros: "));
}
