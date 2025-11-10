const numeros = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numeros.filter((numero)=>{
    return numero %2 === 0

})


const numerosImpares = numeros.filter((numero)=>{
    return numero %2 != 0

})

console.log('Todos os números', numeros)

console.log('Todos os números pares', numerosPares)

console.log('Todos os números', numerosImpares)

const numerosDobrados = numeros.map((numero)=>{
    return numero* 2
})

console.log('Números dobrados', numerosDobrados)

const somaDosNumeros = numeros.reduce((acumulador, numero)=>{
    return acumulador + numero
},0)    
console.log('Soma dos números', somaDosNumeros)

const encontraNumeroMaiorQue5 = numeros.find((numero)=>{
    return numero > 5
})      

console.log('Número maior que 5', encontraNumeroMaiorQue5)

const existeNumeroMaiorQue10 = numeros.some((numero)=>{
    return numero > 10
})      
console.log('Existe número maior que 10?', existeNumeroMaiorQue10)