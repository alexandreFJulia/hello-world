//aula sobre for off que serve para variaveis iteraveis
//funciona com array ou string
//const nome = 'Alexandre Julia'
const nome = ['Alexandre','Font','Julia'];
const pessoa ={
    nome: 'Alexandre',
    sobrenome:'Julia',
    Idade: 44,
    peso: 90
};
// for classico gralmenente com iteraveis - array e strings
// For in - retorna o indice ou chave (string, array, objetos)
//for of - retorna o valor em si geralmente com iteraveis (string e array)

for (let i in pessoa) {
    console.log(i);

}
console.log('------');
//for normal
for (let i = 0; i < nome.length; i++){
console.log(nome[i]);
}
console.log('------');
//for in
for (let i in nome) {
    console.log(nome[i]);
}
console.log('------');
//for of
for (let valor of nome) {
    console.log(valor);
}
console.log('------');
// o indice e o array completo eh opcicional
nome.forEach(function (valor, indice, arraycompleto){
    console.log(valor, indice, arraycompleto);

})
