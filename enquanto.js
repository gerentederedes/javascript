let contador = 1;
while (contador <= 10) {
    console.log("Contador é: " + contador);
    contador++;
}       

const numeroSecreto = 7;
do {
    console.log("Tentando adivinhar o número secreto...")
    var chute = Math.floor(Math.random() * 10) + 1;    
    console.log("Chute: " + chute);    
} while (chute !== numeroSecreto);
