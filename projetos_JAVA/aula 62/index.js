//revisao sobre Arrays...
// arrays eh valro por referencia

const nomes = ['Eduardo', 'Maria', 'Joana', 'Rosana', 'Cecilia'];
//funciona pra srtring, objetos, funções e numeros
//usando o construtir mas do outro jeito eh melhor
//const nomes = new Array('Eduardo', 'Maria', 'Joana');

//const novo = nomes //tudo que for feito em nomes eh feito no novo) e vice-versa

//const novo = [...nomes]  //assim copia  e nao passa por referencia assim o que faz em um nao afeta o outro
//chama-se spread operation

const novo = nomes.slice(1, 3) //coloca o indice que quer começar e um depois do que quer terminar
console.log(novo);  //se colocar -1 tira o ultimo, -2 os dois ultimos etc etc etc
const tamanhoArray = nomes.length;

//para remover elementos do array usar pop
 //tira o ultimo atributo do array e a resposta pode ser o elemento removido
removido = nomes.shift()  //tira do final shif tira do inicio e desloca todo mundo

//para adicionar no inicio usar unshift problema eh que desloca todo mundo e se for um array mto garnde da probnlema de performance
nomes.unshift('Wallace'); //adiona no começo e shift remove do inicio
nomes.push('Alexandre');  //adiciona no final do Array
//removido = nomes.pop();
//nomes[2] = 'Joao'
//delete nomes[2];
console.log(nomes, removido);


const nome2 = 'Alexandre Font Julia';
const arraynomes2 = nome2.split(' ');  //separar uma string em um  array
console.log(arraynomes2);

const stringNomes = arraynomes2.join(' '); //fazer o contrario juntar um array em uma string
console.log(stringNomes);