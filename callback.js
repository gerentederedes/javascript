function Calculadora(a, b, callback) {  
    return callback(a,b) 
    
}

function somar(x, y) {      
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}   

function multiplicar(x, y) {
    return x * y;
}   

function dividir(x, y) {        
    return x / y;               
}

console.log("Operações de Calculadora:");
console.log("Soma: " + Calculadora(10, 5, somar));                
console.log("Subtração: " + Calculadora(10, 5, subtrair));        
console.log("Multiplicação: " + Calculadora(10, 5, multiplicar));  
console.log("Divisão: " + Calculadora(10, 5, dividir));     
console.log("Operação com função anônima (módulo): " + Calculadora(10, 3, function(x, y) {
    return x % y;
}));

console.log("Operação com arrow function (potenciação): " + Calculadora(2, 3, (x, y) => x ** y));   

// Uso de callback para filtrar números pares de um array
function filtrarPares(array, callback) {
    let resultado = []; 
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            resultado.push(array[i]);
        }       }
    return resultado; 
}   
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numeros, function(num) {
    return num % 2 === 0;
}); 

