let n = parseInt(prompt("Digite o valor de n (n > 0):"));

let m = parseInt(prompt("Digite o valor de m (m > 0):"));

let mdc = 1;

let divisor = 2;

while (divisor <= n) {
  if (n % divisor == 0 && m % divisor == 0) {
    mdc = divisor;
  }
  divisor += 1;
}

document.write(`Valor n ${n}, valor m ${m}, Valor Mdc ${mdc}`);
