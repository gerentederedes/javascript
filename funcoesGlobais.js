function saudacao() {
    console.log("Olá! Seja bem-vindo(a) ao curso de JavaScript!");
}   

setTimeout(saudacao, 2000); 

let contador = 0    ;
const intervalo = setInterval(() => {
    contador++;
    console.log("Contador: " + contador);       
    if (contador >= 5) {
        clearInterval(intervalo); 
    }   

}, 1000);



    