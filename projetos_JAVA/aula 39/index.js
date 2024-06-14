//aula de While   e do while

const nome = 'Alexanddre';
let i =0;

while (i <nome.length) {
//console.log(nome[i]);
i++;
};

function aleatorio(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};
const min = 1
const max = 50
let rand = 10   //assim executa o do while e nao executa  while

while (rand !== 10) {
    rand = aleatorio(min,max);
    console.log(rand);
}
console.log('##########');

//do while executa depois checa condição enquanto o while 
//checa a condicao antes de executar

do {
    rand = aleatorio(min,max);
    console.log(rand);
} while(rand!==10);

