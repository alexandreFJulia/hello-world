//aula sobre atribuição via desestruturação

/* let a = 'A';  //B
let b = 'B'; //C
let c = 'C'; //A

//isso eh atribuição via desestruturação
const letras =[b, c, a] ;
[a, b,c ]  = letras;
console.log(a, b, c);
 */

//exemplo 2

//indices        0 1 2 3 4 5 6 7 8 
//const numeros = [19,22,33,44,55,66,77,88,99];
//const primeiroNumero = numeros[0];

//poderia ter sido feito assim
//const [primeiroNumero, segundoNumero] = numeros;

//para pegar o resto da variavel
// rest operator quando pega o resto e quando espalha chama spread operator
//const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
//para pular valores usa espaço entre virguas
//const [primeiroNumero, , terceiroNumero, , quinto, ...resto] = numeros;

//console.log(numeros[0]);
//console.log(primeiroNumero, terceiroNumero, quinto);
//console.log(resto);

//array dentro de array

//                 0        1       2
//              0 1 2  0 1 2   0 1 2     
const numeros = [[1,2,3],[4,5,6],[7,8,9] ];
console.log(numeros[1][2]);
const [lista1, lista2, lista3] = numeros;

const [,[,,seis]] = numeros;
console.log(seis);
console.log(lista2[2]);

// para objetos usa {} ao inves de colchete que eh para array
