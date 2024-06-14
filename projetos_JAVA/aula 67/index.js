//aula sobre REDUCE

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


//some todos os numeros (reduce)

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    return acumulador += valor;
}, 0);  //valor inicialdo acumulador...
console.log(total);
//retorne um array com os numero pares (filter)

//mto melhor fazer com o filter do qu ocmo reduce
const pares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);  //valor inicialdo acumulador...
console.log(pares);

// retorne um array como dobro dos valores (map)
const dobro = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor*2);
    return acumulador;
}, []);  //valor inicialdo acumulador... se colcoar o [] vira um array
//se nao colocar nada ele usa o primiero valor
console.log(dobro);



//retorne a pessoa mais velha


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 64 },
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;    
});

console.log(maisVelha);
