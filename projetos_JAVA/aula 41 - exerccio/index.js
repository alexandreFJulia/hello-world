//execicio de fazer uma funcao que retorna o maior numero

const min = 1;
const max = 100;
let n1 = Math.random() * (max - min) + min;
let n2 = Math.random() * (max - min) + min;

let num1 = Math.floor(n1);
let num2 = Math.floor(n2);


function maximo(x, y) {
    return x > y ? x : y; // operacao ternaria
};

const max2 = (x, y) => x > y ? x : y;   //arow function
    
console.log(`${maximo(num1,num2)} é maior entre ${num1} e ${num2}`);
