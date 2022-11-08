let nota = parseInt(prompt("Digite sua nota: "))

if(nota > 70 && nota <= 90){
    document.write("Passou em I, II e IV, mas não em III ou V; ")
} else if(nota > 60 && nota  <= 70){
    document.write(" Passou em I e II, III ou IV, mas não em ")
}else if(nota < 60){
    document.write("Reprovado – outras situações.")
}else{
    document.write("Passou em todos os exames; ")
}