//ECMAscript (ES6)

/*
cpmentario de bloco
para declarar variavel let nome = 'alex' ou var nome = 'alex'
let nao deixa re-declarar ja o var deixa...
pode criar direto tipo nomoe = 'luiz' porem vira variavel global que afeta o todo...
variaveis primitivos number, string, undefined, null, boolean e symbol (vai ver depois)
*/
let nome = 'Alex';   //string
let sobrenome = "Julia"; //srting
let idade = 45; // number
let peso = 90.5; //number tb
let profissao; //undefined nao aponta pra lugar nenhum a memoria
const salario = null; //nulo - nao aponta pra nenhum local na memoria
let imc //imc = indice de massa corporal comentario simples
const altura = 1.69;
const empregado = true; // boolean pode ser  = true or false

let ano_nasc;

imc = peso / (altura * altura)
ano_nasc = 2024 - idade
console.log(`Meu nome eh ${nome} ${sobrenome}, tenho ${idade} anos, peso ${peso}kg, e meço ${altura}m.`);
console.log(`meu IMC eh: ${imc} e eu nasci no ano de ${ano_nasc}.`);
console.log();
console.log('a variavel profissao eh do tipo:', typeof(profissao));
console.log('a variavel salario eh do tipo:', typeof (salario));

let a = 2
const b = a
console.log (a, b)
a = 3;
console.log (a, b)