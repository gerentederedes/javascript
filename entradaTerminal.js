const readLine = require('readline');

const entradaTerminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
}); 


module.exports = entradaTerminal;   

entradaTerminal.question("Qual o seu nome? ", function(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!");
    entradaTerminal.close();
}); 


