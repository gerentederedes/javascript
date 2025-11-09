const idade = 18;
const possuiCarteira = true;    
const podeDirigir = idade >= 18 && possuiCarteira; 

console.log('Pode dirigir?', podeDirigir);      
const ehMaiorDeIdade = idade >= 18;
const temCarteira = true;    
const podeDirigirOU = ehMaiorDeIdade || temCarteira;            
console.log('Pode dirigir (OU)?', podeDirigirOU);   
const naoPossuiCarteira = !possuiCarteira;
console.log('Não possui carteira?', naoPossuiCarteira); 
const podeDirigirNegacao = idade >= 18 && !possuiCarteira; 
console.log('Pode dirigir (negação)?', podeDirigirNegacao);     
const idadePessoa = 20;
const possuiCarteiraDeMotorista = false;    
const podeDirigirFinal = (idadePessoa >= 18 && possuiCarteiraDeMotorista) || idadePessoa >= 65; 
console.log('Pode dirigir (final)?', podeDirigirFinal);
console.log('Pode dirigir (final)?', podeDirigirFinal);

//and && or || not !