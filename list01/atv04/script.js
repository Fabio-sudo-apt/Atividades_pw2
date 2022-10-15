let num = parseInt(prompt("Digite um número inteiro não-negativo:"));

let mult = 1;

for (let i = 1; i <= num; i++) {
  mult *= i;
}
document.write(mult);
