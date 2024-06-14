

//IEEE 754-2008 como o java trata os numeros

let num1 = 0.7; //number
let num2 = 0.1; //number
//console.log(num1+num2);   //mostra imprecisao


num1 += num2;   //num1 = num1 +num2 0.8
num1 += num2;   //num1 = num1 +num2 0.9
num1 += num2;   //num1 = num1 +num2 1.0
num1 += num2;   //num1 = num1 +num2 1.1
num1 += num2;   //num1 = num1 +num2 1.2
num1 += num2;   //num1 = num1 +num2 1.3
num1 += num2;   //num1 = num1 +num2 1.4
num1 += num2;   //num1 = num1 +num2 1.5
num1 += num2;   //num1 = num1 +num2 1.6
num1 += num2;   //num1 = num1 +num2 1.7
num1 += num2;   //num1 = num1 +num2 1.8
num1 += num2;   //num1 = num1 +num2 1.9
num1 += num2;   //num1 = num1 +num2 2.0

//outra maneira eh num1 = ((num1 * 100) + (num2 * 100)) / 100

//num1 = num1.toFixed(2); //nao resolve
//num1 = parseFloat(num1.toFixed(2));  //dessa maneira o numero fica inteiro
num1 = Number(num1.toFixed(2));   //mesma coisa que o comando anterior
console.log(num1); // resultado eh 0.9999999999999999999 apesar de mostrar 1.0
console.log(Number.isInteger(num1)); //aqui ve que nao eh inteiro



//console.log(num1.toString()  +num2);   //concatenar
//console.log(typeof num1);      //continua sendo numero
//console.log(num1.toString(2)); //representação binaria 
//console.log(num1.toFixed(2));  //limitar casas decimais

//console.log(Number.isInteger(num2))  //verificar se eh inteiro

let temp = num1 * 'ola'

//console.log(Number.isNaN(temp));
//num1 = num1.toString(); // para mudar em definitivo
//console.log(typeof num1); //agora virou string
