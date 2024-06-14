//aula for in - le os indices.... ou chaves do objeto

const frutas = ['maca', 'banana', 'uva', 'pera']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
};

for (let indice in frutas) {
    console.log(frutas[indice]);

}

const pessoa = {
    nome: 'Alexandre',
    sobrenome: 'Julia',
    idade: 44
}

for (let index in pessoa) {
    console.log(index, pessoa[index]);
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

