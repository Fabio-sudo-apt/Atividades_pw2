let base = parseInt(prompt("Digite a base (número inteiro): "));

let expoente = parseInt(prompt("Digite o expoente (inteiro >= 0): "));

let result = 0;

if (expoente < 0) {
  document.write("Numero negativo nao e permitido, tente novamente");
} else {
  result = base ** expoente;

  document.write(`O valor de ${base}, elevado ${expoente}, n é ${result}`);
}
