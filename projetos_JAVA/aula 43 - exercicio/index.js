//escreva funcao que recebe um numero e retorne o seguinte:
//numero for divisivel por 3 = Fizz
//numero divisivel por 5 = Buzz
//Nuero divisivelpo r3 e por 5 = FizzBuzz
//numero nao eh divisivel por 3 e 5 - -retornar o propriio numero
//use funcao com numeros de 0 a 100

const numero = Math.floor(Math.random() * 100);

function DescobreMMC(num) {
    if (num % 3 === 0 && num % 5 !== 0) return 'Fizz';
    if (num % 3 !== 0 && num % 5 === 0) return 'Buzz';
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 !== 0 && num % 5 !== 0 && typeof num ==='number')return  num;
    if (typeof num !=='number') return 'Nan';
};

console.log()

for (let i = 0; i<=100; i++) {
    console.log(i, DescobreMMC(i));

}
