//filter map e reduce...

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//filtrar pares
const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

//dobrar os valores de todos os pares
const dobro = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor *2);
console.log(dobro);

//retorne a soma do dobro de todos os pares
const dobroSomaPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor *2)
.reduce((acumulador, valor) => acumulador+valor);
console.log(dobroSomaPares);


//reduizr (soma tudo);
const somatotal = numeros.reduce((acumulador, valor) => acumulador+= valor); 
console.log(somatotal);