//aula sobre filter- etorna sempre u marray com com a mesma qtd de elementos ou menos

//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//function callBackFilter(valor) {
//    return valor >10;
//};

//const numerosFiltrados = numeros.filter(callBackFilter);
//pode fazer com funcao aninima assim
const numerosFiltrados = numeros.filter((valor) => valor > 10);

console.log(numerosFiltrados);

//retorne as pessoas que tem o nome com 5 letras ou mais

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'RosanA', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

//const pessoasNomeGrande = pessoas.filter(function(valor) {
 //   return valor.nome.length >= 5;
//});

const pessoasNomeGrande = pessoas.filter((valor) => valor.nome.length >= 5);
console.log(pessoasNomeGrande);

//retorne as pessoas com mais de 50 anos

const pessoasVelhas = pessoas.filter(valor => valor.idade > 50);
console.log(pessoasVelhas);

//retorne as pessoas cujo nome termina com A
//passa pra minuscula e verifica se termina com A ou A
const terminaA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(terminaA);

