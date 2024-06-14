//aula for classico


//for tem 3 coisas, separadas por ponto e virgula;
//1-variavel de controle
//2 - condicao de parada
//3 incremento da variavel de controle ++ vai de um em um 
//i = index geralmente usa i

const frutas = ['maça', 'banana', 'pera', 'uva'];
for (let i = 0; i < frutas.length; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    //console.log(i,par)
    console.log(`Indice ${i}`,frutas[i]);
} //nao colocar pobto e virgula ;

