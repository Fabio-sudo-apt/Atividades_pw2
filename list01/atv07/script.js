let base = parseInt(prompt("Diigte a base do retângulo: "));
let altura = parseInt(prompt("Digite a altura do retângulo: "));

let perimetro = 2 * (base + altura);

let area = base * altura;

document.write(
  `Base: ${base} -- 
  Altura: ${altura} --
  Area: ${area} | Perímetro: ${perimetro}`
);
git 