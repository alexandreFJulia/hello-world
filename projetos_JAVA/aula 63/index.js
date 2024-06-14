// aula sobre Splice
//              -5      -4        -3       -2          -1
//              0       1          2        3           4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Júlia'];

  ///primeiro argumento eh de onde começa, segundo eh qtos quer apagar, depois elementos para adicionar separdos por virgula
  //nomes.splice (indice, dete, elemento1, elemento2, elemento3);

  //const removidos = nomes.splice(-3, Number.MAX_VALUE); // ao inves de usar o nomes.pop();
  
//const removidos = nomes.splice(3, 0, 'Alexandre'); //assim nao remove e adiciona no indice desejado
const removidos = nomes.splice(3, 1, 'Alexandre'); //troca um nom, ou melhor adiciona um e tira um
 console.log(nomes, removidos);
console.log(Number.MAX_VALUE) //maior numero possivel do javascipt
//negativo sempre começa do fim do -1, -2, -3, ate o inicio do array

//pop mas usando o splice
//nomes.splice(-1,1);

//shift usando o splice
//nomes.splice(0,1);

//push
//nomes.splice(nomes.lenght,0, 'Luiz').

//unfisft
//nomes.splice(0,0,'Raimundo');