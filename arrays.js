const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta na posição " + i + " é: " + frutas[i]);
}   

frutas.push("Abacaxi");
console.log("Após adicionar Abacaxi: " + frutas);   
frutas.splice(2, 1);
console.log("Após remover Laranja: " + frutas);
const indiceManga = frutas.indexOf("Manga");
frutas.push("Mamão  "); 
console.log("Índice de Manga: " + indiceManga);  
console.log("Array final de frutas: " + frutas);

frutas.forEach(function(fruta, indice) {
    console.log("Fruta no índice " + indice + " é: " + fruta);
});

const frutasComA = frutas.filter(function(fruta) {
    return fruta.toLowerCase().includes('a');
}); 
console.log("Frutas que contêm a letra 'a': " + frutasComA);

const frutasEmString = frutas.join(", ");
console.log("Frutas em uma única string: " + frutasEmString);   
const frutasInvertidas = frutas.reverse();
console.log("Frutas em ordem inversa: " + frutasInvertidas);        