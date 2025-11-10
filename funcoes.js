function saudacao(nome) {
    if (nome) {
        console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!");
    } else {
        console.log("Olá! Seja bem-vindo(a) ao curso de JavaScript!");
    }
}

saudacao("Maria");

const saudacoes = (nome)=>  {
    if (nome) {
        console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!");            
    } else {
        console.log("Olá! Seja bem-vindo(a) ao curso de JavaScript!");
    }   

    saudacoes("João");

function calcularIdade(anoAtual, anoNascimento) {
    let idade = anoAtual - anoNascimento;
    console.log("Você tem " + idade + " anos.");
}           

calcularIdade(2025, 1990);

function mensagemLocalizacao(cidade, estado, pais) {
    console.log("Você está em " + cidade + " - " + estado + ", " + pais + ".");
}   
mensagemLocalizacao("São Paulo", "SP", "Brasil");

function tipoVariavel(variable) {
    console.log(typeof variable);
}       

tipoVariavel(true); // imprime: boolean     
