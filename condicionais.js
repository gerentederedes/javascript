const idade = 25;

if (idade < 18) {
    console.log("Menor de idade");
}   
else if (idade >= 18 && idade < 65) {
    console.log("Adulto");
}   
else {
    console.log("Idoso");
}        


idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");


const notaDoAluno = 14;     
notaDoAluno >= 15 ? console.log("Aprovado") :
    notaDoAluno >= 10 ? console.log("Recuperação") :
        notaDoAluno >= 1 ? console.log("Reprovado"):
            console.log("Reprovado com zero de nota");
            